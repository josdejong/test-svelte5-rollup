import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'

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
      emitCss: false
    }),

    resolve({
      browser: true,
      exportConditions: ['svelte']
    })
  ]
}
