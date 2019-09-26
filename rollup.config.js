
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: id => /^react/.test(id),
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
    resolve(),
    commonjs(),
  ],
};