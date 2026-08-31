import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
} from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const candidates = process.env.DSH_ROOT ? [resolve(process.env.DSH_ROOT)] : [
  resolve(pluginRoot, '../../deepseek-harness'),
  resolve(pluginRoot, '../../upstream/deepseek-harness'),
  resolve(pluginRoot, 'upstream/deepseek-harness'),
  resolve(pluginRoot, '../Relay/upstream/deepseek-harness'),
]
const dshRoot = candidates.find(path => existsSync(join(path, 'apps/cli/package.json')))
if (dshRoot === undefined) {
  fail('Set DSH_ROOT to a prepared official deepseek-harness checkout.')
}

const version = JSON.parse(readFileSync(join(dshRoot, 'apps/cli/package.json'), 'utf8')).version
if (version !== '0.1.2-alpha.2') {
  fail(`Expected verified DSH 0.1.2-alpha.2, found ${version}. Select the matching official checkout.`)
}

const sourceRoot = join(dshRoot, 'node_modules/.pnpm/node_modules/@deepseek-ai')
const targetRoot = join(pluginRoot, 'node_modules/@deepseek-ai')
const prepared = new Map()
for (const name of readdirSync(sourceRoot)) {
  const source = join(sourceRoot, name)
  if (existsSync(join(source, 'package.json'))) prepared.set(name, realpathSync(source))
}

const manifest = JSON.parse(readFileSync(join(pluginRoot, 'package.json'), 'utf8'))
const required = new Set([
  ...Object.keys(manifest.peerDependencies ?? {}),
  ...(manifest.dsh?.client?.inject ?? []),
].filter(name => name.startsWith('@deepseek-ai/')).map(name => name.slice('@deepseek-ai/'.length)))
for (const name of required) {
  if (!prepared.has(name)) {
    fail(`Missing prepared official DSH peer ${name}. Run pnpm install and build in DSH_ROOT.`)
  }
}

mkdirSync(targetRoot, { recursive: true })
// Remove obsolete development links so deleted packages cannot resolve from a
// previous DSH installation. Never alter the official checkout.
for (const name of readdirSync(targetRoot)) {
  if ((name.startsWith('dsh-') || ['cordis', 'cosmokit'].includes(name)) && !prepared.has(name)) {
    removeInsidePlugin(join(targetRoot, name))
  }
}

// Link the complete official graph, including transitive type/brand owners.
for (const [name, source] of prepared) {
  linkDirectory(source, join(targetRoot, name))
}

const result = spawnSync(
  process.execPath,
  [join(pluginRoot, 'scripts/dsh-type-paths.mjs'), dshRoot],
  { stdio: 'inherit' },
)
if (result.status !== 0) fail('Could not prepare official DSH declaration paths.')

// An explicit public-contract checkout is optional; standalone installs use
// the registry dependency recorded in this plugin's lockfile.
if (process.env.SESSION_IMPORT_ROOT) {
  const source = resolve(process.env.SESSION_IMPORT_ROOT)
  if (!existsSync(join(source, 'package.json'))) fail('Invalid SESSION_IMPORT_ROOT.')
  linkDirectory(realpathSync(source), join(pluginRoot, 'node_modules/relay-dsh-plugin-session-import'))
}

function linkDirectory(source, target) {
  if (existsSync(target) && realpathSync(target) === source) return
  removeInsidePlugin(target)
  symlinkSync(source, target, process.platform === 'win32' ? 'junction' : 'dir')
}

function removeInsidePlugin(target) {
  const targetRelative = relative(pluginRoot, target)
  if (targetRelative.startsWith('..') || isAbsolute(targetRelative)) {
    fail(`Refusing to replace link outside plugin root: ${target}`)
  }
  rmSync(target, { recursive: true, force: true })
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
