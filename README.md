# Test issue with rollup bundle not working with Svelte 5

See https://github.com/josdejong/svelte-jsoneditor/pull/476#issuecomment-2263159527

Relevant files:

- `src/lib/index.ts`
- `src/lib/Test.svelte`
- `rollup.config.js`
- `test.html`

Steps to reproduce:

1. Install dependencies via `npm install --force`
2. Run in develop mode to verify that the Svelte app itself works: `npm run dev`, then open your browser and check that you see "Test Component message: Hello world"
3. Build the bundle via `npm run build`
4. Start a local server like [`serve`](https://www.npmjs.com/package/serve) and open `test.html` in your browser. You should see the same message "Hello world" as in (2) but that is not the case. Open your browser console, that will show an error like:

    ```
    Uncaught TypeError: props is undefined
      prop props.js:226
      Test Test.svelte:2
      <anonymous> test.html:32
    ```

To verify that the rollup bundling works with Svelte 4:

5. Open `package.json` and change the version of `"svelte"` from `"5.0.0-next.205"` to `"4.2.18""`.
6. Run `npm install`
7. Execute steps (3) and (4) again: `npm run build`, then open `test.html` in your browser. Now, you'll see the "hello world" message and no errors in the browser console.
