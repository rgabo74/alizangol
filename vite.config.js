import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const virtualTests = 'virtual:practice-tests';
const resolvedVirtualTests = `\0${virtualTests}`;

function practiceTestsPlugin() {
  return {
    name: 'practice-tests',
    resolveId(id) { return id === virtualTests ? resolvedVirtualTests : null; },
    async load(id) {
      if (id !== resolvedVirtualTests) return null;
      const directory = resolve(process.cwd(), 'public/tests');
      const files = (await readdir(directory)).filter((file) => /\.ya?ml$/i.test(file));
      const entries = await Promise.all(files.map(async (file) => [file, await readFile(resolve(directory, file), 'utf8')]));
      return `export default ${JSON.stringify(Object.fromEntries(entries))};`;
    },
    configureServer(server) {
      server.watcher.add(resolve(process.cwd(), 'public/tests'));
      server.watcher.on('all', (_event, file) => {
        if (/public\/tests\/.*\.ya?ml$/i.test(file)) {
          const module = server.moduleGraph.getModuleById(resolvedVirtualTests);
          if (module) server.moduleGraph.invalidateModule(module);
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
  };
}

export default defineConfig({ plugins: [react(), practiceTestsPlugin()] });
