import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import yaml from 'js-yaml';
import testFiles from 'virtual:practice-tests';
import vocabularyFiles from 'virtual:practice-vocabularies';
import './styles.css';

const tests = Object.entries(testFiles)
  .map(([path, contents]) => ({ ...yaml.load(contents), path }))
  .filter((test) => test?.id && (Array.isArray(test.questions) || test.type === 'vocabulary'));

const vocabularies = Object.entries(vocabularyFiles)
  .map(([path, contents]) => ({ ...yaml.load(contents), path }))
  .filter((vocabulary) => vocabulary?.id && Array.isArray(vocabulary.words) && vocabulary.words.length >= 6);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.max(0, seconds - minutes * 60);
  return `${minutes}:${remaining.toString().padStart(2, '0')}`;
};

const normalize = (value) => String(value ?? '').trim().toLocaleLowerCase();
const chooseQuestions = (test) => Array.from({ length: test.repetitions }, () =>
  test.questions[Math.floor(Math.random() * test.questions.length)],
);
const storageKey = (id) => `alice-english-leaderboard:${id}`;
const getScores = (id) => {
  try { return JSON.parse(localStorage.getItem(storageKey(id)) || '[]'); } catch { return []; }
};
const saveScore = (id, score) => {
  const results = [...getScores(id), score].sort((a, b) => a.seconds - b.seconds).slice(0, 5);
  localStorage.setItem(storageKey(id), JSON.stringify(results));
  return results;
};

function multipleChoiceQuestion(words, word, direction, index) {
  const answer = direction === 'hungarian_to_english' ? word.english : word.hungarian;
  const promptWord = direction === 'hungarian_to_english' ? word.hungarian : word.english;
  const incorrect = words
    .filter((candidate) => candidate !== word)
    .map((candidate) => direction === 'hungarian_to_english' ? candidate.english : candidate.hungarian);
  const wrongAnswers = Array.from({ length: 5 }, (_item, offset) => incorrect[(index + offset * 3) % incorrect.length]);
  const correctAnswer = (index % 6) + 1;
  const choices = {};
  let wrongIndex = 0;
  for (let option = 1; option <= 6; option += 1) {
    choices[option] = option === correctAnswer ? answer : wrongAnswers[wrongIndex++];
  }
  return {
    id: `${direction}-${index + 1}`,
    type: 'single_choice',
    prompt: direction === 'hungarian_to_english'
      ? `What is the English word for: ${promptWord}?`
      : `What is the Hungarian word for: ${promptWord}?`,
    choices,
    correct_answer: correctAnswer,
  };
}

function buildVocabularyTest(mode, vocabulary) {
  const words = vocabulary.words;
  const repetitions = Number(vocabulary.repetitions);
  const targetSecondsPerRepetition = Number(vocabulary.target_seconds_per_repetition);
  const questions = mode.vocabulary_mode === 'multiple_choice_bidirectional'
    ? [
      ...words.map((word, index) => multipleChoiceQuestion(words, word, 'hungarian_to_english', index)),
      ...words.map((word, index) => multipleChoiceQuestion(words, word, 'english_to_hungarian', index)),
    ]
    : words.map((word, index) => ({
      id: `hungarian_to_english-${index + 1}`,
      type: 'free_text',
      prompt: `Write the English word for: ${word.hungarian}`,
      correct_answer: word.english,
      accepted_answers: [word.english],
    }));
  return {
    ...mode,
    type: "generated_vocabulary",
    id: `${mode.id}:${vocabulary.id}`,
    title: `${vocabulary.title}: ${mode.title}`,
    description: mode.description,
    sourceMode: mode,
    vocabulary,
    repetitions,
    target_seconds_per_repetition: targetSecondsPerRepetition,
    target_seconds: repetitions * targetSecondsPerRepetition,
    questions,
  };
}

function App() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [result, setResult] = useState(null);

  const activeQuestion = queue[index];
  const totalTime = elapsed + penalty;
  const leaderboard = useMemo(() => selectedTest ? getScores(selectedTest.id) : [], [selectedTest, result]);

  const selectTest = (test) => {
    setSelectedTest(test);
    setQueue([]);
    setIndex(0);
    setStartedAt(0);
    setElapsed(0);
    setPenalty(0);
    setAnswer('');
    setFeedback(null);
    setResult(null);
  };

  const clearTest = () => {
    setSelectedTest(null);
    setQueue([]);
    setIndex(0);
    setStartedAt(0);
    setElapsed(0);
    setPenalty(0);
    setAnswer('');
    setFeedback(null);
    setResult(null);
  };

  const exitTest = () => {
    if (window.history.state?.alicePracticeTest) window.history.back();
    else clearTest();
  };

  useEffect(() => {
    const handleBack = () => {
      if (startedAt) clearTest();
    };
    window.addEventListener('popstate', handleBack);
    return () => window.removeEventListener('popstate', handleBack);
  }, [startedAt]);

  useEffect(() => {
    if (!startedAt || result) return undefined;
    const timer = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 250);
    return () => window.clearInterval(timer);
  }, [startedAt, result]);

  const startTest = () => {
    if (!window.history.state?.alicePracticeTest) {
      window.history.pushState({ ...window.history.state, alicePracticeTest: true }, '');
    }
    setQueue(chooseQuestions(selectedTest));
    setIndex(0); setPenalty(0); setElapsed(0); setAnswer(''); setFeedback(null); setResult(null);
    setStartedAt(Date.now());
  };

  const finishTest = (newPenalty) => {
    const seconds = Math.floor((Date.now() - startedAt) / 1000) + newPenalty;
    const before = getScores(selectedTest.id);
    const isPersonalBest = before.length === 0 || seconds < before[0].seconds;
    const reachedGoal = seconds <= selectedTest.target_seconds;
    const entry = { seconds, date: new Date().toISOString(), reachedGoal };
    saveScore(selectedTest.id, entry);
    setResult({ seconds, isPersonalBest, reachedGoal });
  };

  const submit = (picked) => {
    if (!activeQuestion || feedback) return;
    const proposed = picked ?? answer;
    const correct = activeQuestion.type === 'free_text'
      ? [activeQuestion.correct_answer, ...(activeQuestion.accepted_answers || [])].some((item) => normalize(item) === normalize(proposed))
      : activeQuestion.type === 'multi_choice'
        ? JSON.stringify([...proposed].sort()) === JSON.stringify([...(activeQuestion.correct_answers || [])].sort())
        : Number(proposed) === Number(activeQuestion.correct_answer);
    const addedPenalty = correct ? penalty : penalty + (selectedTest.penalty_seconds ?? 5);
    if (!correct) setPenalty(addedPenalty);
    const correctText = activeQuestion.type === 'free_text'
      ? activeQuestion.correct_answer
      : activeQuestion.type === 'multi_choice'
        ? activeQuestion.correct_answers.map((id) => activeQuestion.choices[id]).join(', ')
        : activeQuestion.choices[activeQuestion.correct_answer];
    setFeedback({ correct, correctText });
    window.setTimeout(() => {
      if (index + 1 >= queue.length) finishTest(addedPenalty);
      else { setIndex((current) => current + 1); setAnswer(''); setFeedback(null); }
    }, correct || !selectedTest.reveal_correct_answer ? 650 : 1500);
  };

  if (!selectedTest) return <Home onSelect={selectTest} />;
  if (selectedTest.type === 'vocabulary') {
    return <VocabularyPicker mode={selectedTest} onBack={clearTest} onSelect={(vocabulary) => selectTest(buildVocabularyTest(selectedTest, vocabulary))} />;
  }
  if (result) return <Results test={selectedTest} result={result} leaderboard={leaderboard} onAgain={startTest} onHome={exitTest} />;
  if (!startedAt) return <TestIntro test={selectedTest} leaderboard={leaderboard} onStart={startTest} onBack={() => selectedTest.sourceMode ? selectTest(selectedTest.sourceMode) : clearTest()} />;
  return <Practice test={selectedTest} question={activeQuestion} index={index} total={queue.length} totalTime={totalTime} answer={answer} setAnswer={setAnswer} feedback={feedback} onSubmit={submit} onExit={exitTest} />;
}

function TestCard({ test, onSelect }) {
  return <button className="test-card" onClick={() => onSelect(test)}><span className="card-icon">✦</span><span><strong>{test.title}</strong><small>{test.description}</small></span><span className="arrow">→</span></button>;
}

function Home({ onSelect }) {
  const practiceTests = tests.filter((test) => test.type !== 'vocabulary');
  const vocabularyTests = tests.filter((test) => test.type === 'vocabulary');
  return <main className="shell home"><span className="eyebrow">ALÍZ'S LITTLE STUDIO</span><h1>English<br /><em>practice</em></h1><p className="lead">A small place to learn, answer quickly, and celebrate every win.</p><section className="home-section"><span className="eyebrow">TESTS</span><div className="test-grid">{practiceTests.map((test) => <TestCard test={test} onSelect={onSelect} key={test.id} />)}</div></section>{vocabularyTests.length > 0 && <section className="home-section"><span className="eyebrow">VOCABULARY PRACTICE</span><div className="test-grid">{vocabularyTests.map((test) => <TestCard test={test} onSelect={onSelect} key={test.id} />)}</div></section>}<p className="footer-note">{tests.length} practice tests ready</p></main>;
}

function VocabularyPicker({ mode, onBack, onSelect }) {
  return <main className="shell"><button className="back" onClick={onBack}>← All tests</button><section className="hero-card"><span className="card-icon big">✦</span><span className="eyebrow">VOCABULARY PRACTICE</span><h1>{mode.title}</h1><p>Choose the vocabulary you want to practise.</p></section><section className="home-section"><div className="test-grid">{vocabularies.map((vocabulary) => <button className="test-card" key={vocabulary.id} onClick={() => onSelect(vocabulary)}><span className="card-icon">Aa</span><span><strong>{vocabulary.title}</strong><small>{vocabulary.description}</small></span><span className="arrow">→</span></button>)}</div></section></main>;
}

function TestIntro({ test, leaderboard, onStart, onBack }) {
  return <main className="shell"><button className="back" onClick={onBack}>← All tests</button><section className="hero-card"><span className="card-icon big">✦</span><h1>{test.title}</h1><p>{test.description}</p><div className="stats"><span><b>{test.repetitions}</b> questions</span><span><b>{test.target_seconds_per_repetition ? `s` : formatTime(test.target_seconds)}</b>{test.target_seconds_per_repetition ? " per question" : " goal"}</span><span><b>+{test.penalty_seconds}s</b> wrong answer</span></div><button className="primary" onClick={onStart}>Start practice <span>→</span></button></section><Leaderboard entries={leaderboard} /></main>;
}

function Practice({ test, question, index, total, totalTime, answer, setAnswer, feedback, onSubmit, onExit }) {
  const [multi, setMulti] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => setMulti([]), [question]);
  useEffect(() => {
    if (question?.type === 'free_text' && !feedback) inputRef.current?.focus();
  }, [question, feedback]);
  const toggle = (choice) => setMulti((current) => current.includes(choice) ? current.filter((item) => item !== choice) : [...current, choice]);
  return <main className="shell practice"><div className="practice-top"><button className="exit-test" onClick={onExit}>Exit test</button><span>Question {index + 1} of {total}</span><strong>⏱ {formatTime(totalTime)}</strong></div><div className="progress"><i style={{ width: `${(index / total) * 100}%` }} /></div><section className="question-card"><span className="eyebrow">{test.title}</span><h2>{question.prompt}</h2>{question.type === 'free_text' ? <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }}><input ref={inputRef} value={answer} disabled={!!feedback} onChange={(event) => setAnswer(event.target.value)} placeholder="Type your answer" autoComplete="off" /><button className="primary" disabled={!answer.trim() || !!feedback}>Check answer</button></form> : <div className="choices">{Object.entries(question.choices).map(([id, label]) => { const numeric = Number(id); const selected = question.type === 'multi_choice' ? multi.includes(numeric) : false; return <button key={id} className={`choice ${selected ? 'selected' : ''}`} disabled={!!feedback} onClick={() => question.type === 'multi_choice' ? toggle(numeric) : onSubmit(numeric)}><b>{id}</b>{label}</button>; })}{question.type === 'multi_choice' && <button className="primary" disabled={!multi.length || !!feedback} onClick={() => onSubmit(multi)}>Check answer</button>}</div>}{feedback && <div className={`feedback ${feedback.correct ? 'good' : 'bad'}`}>{feedback.correct ? '✓ Great job!' : <>Not quite. {test.reveal_correct_answer && <>The answer is <b>{feedback.correctText}</b>.</>}</>}</div>}</section></main>;
}

function Results({ test, result, leaderboard, onAgain, onHome }) {
  return <main className="shell results">{result.reachedGoal && <div className="fireworks" aria-hidden="true">✦ ✧ ✦ ✧ ✦</div>}<section className="result-card"><div className="celebration">{result.isPersonalBest ? '🏆' : result.reachedGoal ? '🎆' : '🌷'}</div><span className="eyebrow">PRACTICE COMPLETE</span><h1>{result.isPersonalBest ? 'New best score!' : 'Well done!'}</h1><p className="time">{formatTime(result.seconds)}</p>{result.reachedGoal && <p className="goal-message">You reached your goal. You won 20 points!</p>}<button className="primary" onClick={onAgain}>Practice again <span>↻</span></button><button className="text-button" onClick={onHome}>Choose another test</button></section><Leaderboard entries={leaderboard} /></main>;
}

function Leaderboard({ entries }) { return <section className="leaderboard"><div><span className="eyebrow">YOUR BEST TIMES</span><h2>Top 5</h2></div>{entries.length ? <ol>{entries.map((entry, i) => <li key={`${entry.date}-${i}`}><span className="rank">{i + 1}</span><span>{formatTime(entry.seconds)} {entry.reachedGoal && <b title="Goal reached">🔥</b>}<small>{new Date(entry.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</small></span></li>)}</ol> : <p className="empty">Your first result will appear here.</p>}</section>; }

createRoot(document.getElementById('root')).render(<App />);
