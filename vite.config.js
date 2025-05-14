import { defineConfig } from 'vite';
import { copy } from 'vite-plugin-copy'; // Importer le plugin

export default defineConfig({
  build: {
    lib: {
      entry: 'embed.js',
      name: 'CarteInteractive',
      fileName: () => 'carte.bundle.js',
      formats: ['iife'], // pour navigateur directement
    },
    rollupOptions: {
      output: {
        // Pour que tout soit dans un seul fichier
        inlineDynamicImports: true,
        // Gérer le CSS dans le bundle
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'test-carte.html', // Chemin vers ton fichier HTML
          dest: 'dist',  // Dossier où copier le fichier
        }
      ]
    })
  ]
});
