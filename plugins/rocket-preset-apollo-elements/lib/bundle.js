// @ts-expect-error: it's not typescript
import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader/lib/index.mjs';
import esbuild from 'esbuild';
import chalk from 'chalk';
import hirestime from 'hirestime';

import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { monorepoResolvePlugin } from 'esbuild-plugin-monorepo-resolve';

const __dirname = resolve(dirname(fileURLToPath(import.meta.url)));

/**
 * @param  {import('esbuild').BuildOptions} opts
 */
async function build(opts) {
  return await esbuild.build({
    bundle: true,
    minify: process.env.CI === 'true',
    sourcemap: true,
    format: 'esm',
    target: 'es2020',
    outdir: 'docs/_merged_assets/_static/apollo-elements',
    ...opts,
    plugins: [
      monorepoResolvePlugin({ scope: '@apollo-elements', external: opts.external }),
      litCssPlugin(),
      graphqlLoaderPlugin(),
      {
        name: 'fake it for gluon',
        setup(build) {
          build.onResolve({ filter: /lit-html\/lib\/shady-render.js$/ }, async ({ resolveDir }) => {
            return { path: join(resolveDir, '../../lit-html/lit-html.js') };
          });
        },
      },
    ],
  }).catch(e => {
    console.error(e);
    process.exit(1);
  });
}

export async function bundle() {
  console.log(chalk.yellow`[apollo-elements] ${chalk.blue`Building ${chalk.bold`Apollo Elements`} packages...`}`);
  const btime = hirestime.default();

  await Promise.all([
    build({
      entryPoints: {
        'apollo-client': join(__dirname, '..', 'entrypoints/client.ts'),
        'apollo-elements': join(__dirname, '..', 'entrypoints/apollo-elements.ts'),
      },
    }),

    build({
      external: ['@apollo/client/core/*', '@apollo-elements/core', '@apollo-elements/core/*'],
      entryPoints: {
        'schema-link': join(__dirname, '..', 'entrypoints/schemalink.ts'),
      },
    }),

    build({
      external: ['@apollo-elements/core', '@apollo-elements/core/*'],
      entryPoints: {
        'atomico': join(__dirname, '..', 'entrypoints/atomico.ts'),
        'fast': join(__dirname, '..', 'entrypoints/fast.ts'),
        'gluon': join(__dirname, '..', 'entrypoints/gluon.ts'),
        'haunted': join(__dirname, '..', 'entrypoints/haunted.ts'),
        'hybrids': join(__dirname, '..', 'entrypoints/hybrids.ts'),
        'lit-apollo': join(__dirname, '..', 'entrypoints/lit-apollo.ts'),
        'lit': join(__dirname, '..', 'entrypoints/lit.ts'),
        'mixins': join(__dirname, '..', 'entrypoints/mixins.ts'),
        'polymer': join(__dirname, '..', 'entrypoints/polymer.ts'),
        'sandbox': '@power-elements/codesandbox-button',
      },
    }),
  ]);

  console.log(chalk.yellow`[apollo-elements] ${chalk.green`Done in ${btime.seconds()}s`}`);
}
