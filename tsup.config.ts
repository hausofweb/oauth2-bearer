import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry point of your library
  format: ['cjs', 'esm'], // Output formats
  dts: true, // Generate TypeScript declaration files
  clean: true, // Clean the output directory before each build
  minify: true, // Minify the output
  sourcemap: true, // Generate source maps
});
