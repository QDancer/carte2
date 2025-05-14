import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';

export default {
  input: 'main.js',
  output: {
    file: 'dist/carte.bundle.js',
    format: 'iife',                // 👈 exécution immédiate
    name: 'CarteBundle',           // 👈 nom global injecté dans window
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(),
    image(),                        // ✅ Active le support des imports d’images
    css({ output: 'carte.bundle.css' }) // ✅ Extrait le CSS dans un fichier à part
  ]
};
