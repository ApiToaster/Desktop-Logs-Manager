import * as esbuild from 'esbuild'

const ctx = await esbuild.context({
  entryPoints: ['build/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  format: 'cjs',
  target: ['node20'],
  external: ['@nodegui/nodegui', 'nodegui-plugin-*'],
  outfile: 'dist/index.cjs',
})

await ctx.watch()
