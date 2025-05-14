import { defineConfig } from 'vite';
import { copy } from 'vite-plugin-copy'; // Importer le plugin

export default defineConfig({
  base: './', // <-- Ajouté pour générer des chemins relatifs
  build: {
    lib: {
      entry: 'embed.js',
      name: 'CarteInteractive',
      fileName: () => 'carte.bundle.js',
      formats: ['iife'], // pour navigateur directement
    },
    // ...le reste du code...
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
