/**
 * tsdown build for dsh-crt-theme: a minimal ESM node half (lib/index.js) plus
 * the browser client bundle (lib/client.js, CJS closure factory registering
 * itself via window.__ModuleLoader__.load).
 *
 * Mirrors the dsh-web-preview-float client-bundle preset:
 * - externals resolve through the loader module table (react / react-dom /
 *   cordis), everything else inlines;
 * - the purity gate rejects any @deepseek-ai value import (cross-plugin
 *   collaboration goes through cordis services, never value imports);
 * - plain CSS compiles to one injected <style data-plugin> tag.
 */
import { readFile } from 'node:fs/promises'
import { basename, dirname, resolve as resolvePath } from 'node:path'
import { builtinModules } from 'node:module'
import type { UserConfig } from 'tsdown'

/** The registered module-loader id — MUST stay in sync with package.json `name`. */
const PLUGIN_ID = '@dsh-external/dsh-crt-theme'

const CLIENT_EXTERNALS = ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'cordis']

const NODE_BUILTINS = new Set([...builtinModules, ...builtinModules.map(id => `node:${id}`)])

const CSS_VIRTUAL_PREFIX = '\0dsh-css:'
const CSS_VIRTUAL_SUFFIX = '.mjs'

function injectTag(pluginId: string, fileId: string, cssText: string): string {
  const tagId = `${pluginId}/${basename(fileId)}`
  return [
    `const css = ${JSON.stringify(cssText)};`,
    `const tagId = ${JSON.stringify(tagId)};`,
    `if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {`,
    `  const tag = document.createElement('style');`,
    `  tag.dataset.plugin = ${JSON.stringify(pluginId)};`,
    `  tag.dataset.pluginCss = tagId;`,
    `  tag.textContent = css;`,
    `  document.head.appendChild(tag);`,
    `}`,
  ].join('\n')
}

export default [
  {
    entry: { index: 'src/index.ts' },
    outDir: 'lib',
    format: ['esm'],
    platform: 'node',
    target: 'es2024',
    dts: false,
    clean: false,
    outputOptions: {
      // package.json `main` / `exports["."]` point at lib/index.js, so keep
      // the ESM node half on the `.js` extension instead of tsdown's `.mjs`.
      entryFileNames: '[name].js',
    },
  },
  {
    entry: { client: 'src/client/index.ts' },
    outDir: 'lib',
    format: 'cjs',
    platform: 'browser',
    dts: false,
    sourcemap: true,
    clean: false,
    deps: {
      neverBundle: CLIENT_EXTERNALS,
      alwaysBundle: (id: string) => !CLIENT_EXTERNALS.includes(id),
    },
    plugins: [{
      name: 'dsh-client-bundle-purity',
      resolveId(source: string) {
        if (NODE_BUILTINS.has(source)) {
          throw new Error(`client bundle purity: Node builtin "${source}" cannot run in the browser module table`)
        }
        if (!source.startsWith('@deepseek-ai/')) return null
        if (CLIENT_EXTERNALS.includes(source)) return null
        throw new Error(`client bundle purity: "${source}" is not a platform module — cross-plugin value imports are forbidden`)
      },
    }, {
      name: 'dsh-css-inline',
      resolveId(source: string, importer: string | undefined) {
        if (!source.endsWith('.css')) return null
        const abs = importer === undefined ? source : resolvePath(dirname(importer), source)
        return CSS_VIRTUAL_PREFIX + abs + CSS_VIRTUAL_SUFFIX
      },
      async load(virtualId: string) {
        if (!virtualId.startsWith(CSS_VIRTUAL_PREFIX)) return null
        const fileId = virtualId.slice(CSS_VIRTUAL_PREFIX.length, -CSS_VIRTUAL_SUFFIX.length)
        this.addWatchFile(fileId)
        const source = await readFile(fileId)
        return [injectTag(PLUGIN_ID, fileId, source.toString('utf8')), 'export default "";'].join('\n')
      },
    }],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(PLUGIN_ID)}, factory: (require) => {`,
      footer: 'return module.exports; } });',
      intro: 'var module = { exports: {} }; var exports = module.exports;',
      codeSplitting: false,
    },
  },
] satisfies UserConfig[]
