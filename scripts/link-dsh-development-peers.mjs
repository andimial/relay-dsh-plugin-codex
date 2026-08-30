import { existsSync, mkdirSync, rmSync, symlinkSync } from 'node:fs'
import { dirname, isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const peerNames = [
  'cordis',
  'dsh-api-remotes',
  'dsh-api-session-controller',
  'dsh-api-workspace-controller',
  'dsh-client-connection',
  'dsh-client-locale',
  'dsh-client-store',
  'dsh-client-ui-chat',
  'dsh-client-ui-conversation',
  'dsh-client-ui-primitives',
  'dsh-client-ui-renderer',
  'dsh-client-ui-session',
  'dsh-client-ui-settings',
  'dsh-client-ui-sidebar',
  'dsh-client-ui-slots',
  'dsh-client-ui-theme',
  'dsh-llm',
  'dsh-session',
  'dsh-tools',
  'dsh-typert-protocol',
]

const dshRoot = firstPackageRoot([
  process.env.DSH_ROOT,
  resolve(pluginRoot, '../../deepseek-harness'),
  resolve(pluginRoot, '../../upstream/deepseek-harness'),
  resolve(pluginRoot, 'upstream/deepseek-harness'),
])
if (dshRoot === undefined) {
  fail('Set DSH_ROOT to a prepared official deepseek-harness checkout.')
}

const sourceRoot = join(dshRoot, 'node_modules/.pnpm/node_modules/@deepseek-ai')
const targetRoot = join(pluginRoot, 'node_modules/@deepseek-ai')
mkdirSync(targetRoot, { recursive: true })
for (const peer of peerNames) {
  linkDirectory(join(sourceRoot, peer), join(targetRoot, peer), `DSH workspace peer ${peer}`)
}

const installedSessionImport = join(pluginRoot, 'node_modules/relay-dsh-plugin-session-import')
const sessionImportRoot = firstPackageRoot([
  process.env.SESSION_IMPORT_ROOT,
  resolve(pluginRoot, '../session-import'),
  resolve(pluginRoot, '../../../relay-dsh-plugin-session-import'),
])
if (sessionImportRoot !== undefined) {
  linkDirectory(sessionImportRoot, installedSessionImport, 'relay-dsh-plugin-session-import')
} else if (!existsSync(join(installedSessionImport, 'package.json'))) {
  fail('Set SESSION_IMPORT_ROOT to a built relay-dsh-plugin-session-import checkout.')
}

function firstPackageRoot(candidates) {
  for (const candidate of candidates) {
    if (candidate && existsSync(join(resolve(candidate), 'package.json'))) return resolve(candidate)
  }
  return undefined
}

function linkDirectory(source, target, label) {
  if (!existsSync(source)) fail(`Missing ${label}: ${source}\nRun pnpm install in DSH_ROOT first.`)
  const targetRelative = relative(pluginRoot, target)
  if (targetRelative.startsWith('..') || isAbsolute(targetRelative)) {
    fail(`Refusing to replace link outside plugin root: ${target}`)
  }
  rmSync(target, { recursive: true, force: true })
  symlinkSync(source, target, process.platform === 'win32' ? 'junction' : 'dir')
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
