import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const collections = [
  { virtualId: 'virtual:practice-tests', directory: 'public/tests' },
  { virtualId: 'virtual:practice-vocabularies', directory: 'public/vocabularies' },
];

function yamlCollectionsPlugin() {
  const resolvedIds = new Map(collections.map(({ virtualId }) => [virtualId, `\0${virtualId}`]));
  return {
    name: 'yaml-collections',
    resolveId(id) { return resolvedIds.get(id) || null; },
    async load(id) {
      const collection = collections.find(({ virtualId }) => resolvedIds.get(virtualId) === id);
      if (!collection) return null;
      const directory = resolve(process.cwd(), collection.directory);
      const files = (await readdir(directory)).filter((file) => /\.ya?ml$/i.test(file));
      const entries = await Promise.all(files.map(async (file) => [file, await readFile(resolve(directory, file), 'utf8')]));
      return `export default ${JSON.stringify(Object.fromEntries(entries))};`;
    },
    configureServer(server) {
      for (const collection of collections) {
        const directory = resolve(process.cwd(), collection.directory);
        server.watcher.add(directory);
        server.watcher.on('all', (_event, file) => {
          if (file.startsWith(directory) && /\.ya?ml$/i.test(file)) {
            const module = server.moduleGraph.getModuleById(resolvedIds.get(collection.virtualId));
            if (module) server.moduleGraph.invalidateModule(module);
            server.ws.send({ type: 'full-reload' });
          }
        });
      }
    },
  };
}

export default defineConfig({ plugins: [react(), yamlCollectionsPlugin()], base: '/alizangol/' });
