/*

Within our module.exports object, we've defined two globs: one that will match any TypeScript files in our apps,
libraries, and tools directories, and another that also matches JavaScript and JSON files in those directories. We only
need to run type checking for the TypeScript files, which is why that one is broken out and narrowed down to only those
files.

These globs defining our directories can be passed a single command, or an array of commands. It's common with
lint-staged to just pass a string like tsc --noEmit or eslint --fix. But we're going to pass a function instead to
combine the list of files provided by lint-staged with the desired Nx commands.

The nx affected and nx format:write commands both accept a --files option. And remember that lint-staged always passes
in a list of staged files. That array of file paths becomes the argument to our functions, and we concatenate our list
of files from lint-staged into a comma-delimited string and interpolate that into the desired Nx command's --files
option. This will override Nx's normal behavior to explicitly tell it to only run the commands on the files that have
changed and any other files affected by those changes.

https://www.thisdot.co/blog/linting-formatting-and-type-checking-commits-in-an-nx-monorepo-with-husky/
*/

module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
};
