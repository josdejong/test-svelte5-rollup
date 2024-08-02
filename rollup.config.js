import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    svelte({
      emitCss: true
    }),

    postcss({
      plugins: []
    }),

    resolve({
      browser: true,
      exportConditions: ['svelte']
    })
  ]
}
