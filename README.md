# Codex Conversations for DeepSeek Harness

[![npm version](https://img.shields.io/npm/v/relay-dsh-plugin-codex?label=npm)](https://www.npmjs.com/package/relay-dsh-plugin-codex)
[![CI](https://github.com/yangbobo2021/relay-dsh-plugin-codex/actions/workflows/ci.yml/badge.svg)](https://github.com/yangbobo2021/relay-dsh-plugin-codex/actions/workflows/ci.yml)
[![npm downloads](https://img.shields.io/npm/dm/relay-dsh-plugin-codex?label=downloads)](https://www.npmjs.com/package/relay-dsh-plugin-codex)
[![GitHub stars](https://img.shields.io/github/stars/yangbobo2021/relay-dsh-plugin-codex?style=flat)](https://github.com/yangbobo2021/relay-dsh-plugin-codex/stargazers)
[![MIT license](https://img.shields.io/github/license/yangbobo2021/relay-dsh-plugin-codex)](LICENSE)
[![DSH compatibility](https://img.shields.io/badge/DSH-0.1.1--rc.2-2f7d68)](https://github.com/deepseek-ai/deepseek-harness)
[![npm provenance](https://img.shields.io/badge/npm_provenance-verified-2f9e44)](https://www.npmjs.com/package/relay-dsh-plugin-codex/v/0.1.1-rc.3)

English | [中文](README.zh.md)

**npm package:** [`relay-dsh-plugin-codex`](https://www.npmjs.com/package/relay-dsh-plugin-codex)
· [All Relay DSH plugins](https://github.com/yangbobo2021/Relay/blob/codex/relay-foundation/docs/dsh-plugins.md)

[![Live npm-installed Relay plugins in official DSH](https://raw.githubusercontent.com/yangbobo2021/Relay/codex/relay-foundation/docs/media/dsh-plugin-suite-demo.gif)](https://github.com/yangbobo2021/Relay/blob/codex/relay-foundation/docs/dsh-plugins.md)

*Real npm-installed demo on official DSH: live Codex and Claude replies, a
workspace file preview, and an executed terminal command. [Watch the H.264
MP4](https://github.com/yangbobo2021/Relay/blob/codex/relay-foundation/docs/media/dsh-plugin-suite-demo.mp4?raw=1).*

`relay-dsh-plugin-codex` adds **Codex as a conversation backend** to the
official [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
(DSH) Web UI. After installation, **Codex** appears in DSH's New Session mode
menu. One DSH Session is bound to one Codex App Server Thread.

![Codex and Claude Code in the DSH New Session mode menu](docs/images/dsh-new-session-backends.jpg)

The screenshot was captured from official DSH `0.1.1-rc.2` with the Codex and
Claude plugins installed. If you install only this plugin, only **Codex** is
added.

## Do I Need This Plugin?

Install it when you want to:

- use Codex inside DSH instead of switching to a separate Codex interface;
- keep DSH's native conversation history, composer, approvals, questions, and
  tool presentation;
- let one DSH Session continue the same Codex App Server Thread across turns;
- use Codex models, reasoning effort, images, interruption, and DSH-contributed
  tools in the same conversation.

You do not need it to use DSH's standard agents. It also does not add Relay
Events, file browsing, or a terminal panel. Those are separate optional plugins.

## Quick Start With Official DSH

The steps below were validated with:

- DeepSeek Harness `0.1.1-rc.2`, commit
  [`b150a551`](https://github.com/deepseek-ai/deepseek-harness/commit/b150a551b8d465e31e418e1b2eaf5e79bbb7d28e)
- Node.js 22.13 or newer
- `pnpm` available on `PATH`

DSH is currently a developer preview and may introduce compatibility-breaking
changes. This repository tracks official releases and records its tested version
here.

### 1. Prepare Codex authentication

The plugin installs a pinned official `@openai/codex` runtime and launches it in
App Server mode. The runtime contains native binaries for macOS, Windows, and
Linux on x64 and arm64, so DSH does not need to find a `codex` command on its
`PATH`.

Codex authentication is still required. Install or open an official Codex
client and authenticate it before starting your first DSH Codex session. When
using the CLI, verify the shared local credentials with:

```bash
codex --version
codex login
```

See the official [Codex CLI guide](https://learn.chatgpt.com/docs/codex/cli) and
[authentication documentation](https://learn.chatgpt.com/docs/auth) for
installation and sign-in options. Credentials stay under Codex's normal local
authentication mechanism; this plugin does not collect them. Installing this
plugin supplies its App Server runtime, but does not add a global `codex` shell
command.

### 2. Choose a package source and install

Stop a running DSH Web process before changing Profile bundles. Choose one of
the following sources.

#### Stable npm release

The published npm package name is
[`relay-dsh-plugin-codex`](https://www.npmjs.com/package/relay-dsh-plugin-codex).
Use `@latest` to install the current stable release:

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 plugin --profile web add relay-dsh-plugin-codex@latest
```

At the time of writing, `latest` resolves to stable version `0.1.0`. The linked
npm page is the source of truth for the current version.

#### npm prerelease (recommended during DSH preview)

Use `@next` to try the newest release candidate that has passed the repository's
CI publishing and official DSH compatibility checks. The current candidate also
contains the bundled cross-platform App Server runtime, so DSH does not depend
on a global `codex` executable:

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 plugin --profile web add relay-dsh-plugin-codex@next
```

At the time of writing, `next` resolves to `0.1.1-rc.3`.

#### GitHub development build

Install the current `main` branch when testing an unreleased change:

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 plugin --profile web add github:yangbobo2021/relay-dsh-plugin-codex#main
```

`main` can change at any time. For a reproducible GitHub install, pin a Tag or
full Commit SHA instead. For example:

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 plugin --profile web add github:yangbobo2021/relay-dsh-plugin-codex#v0.1.1-rc.3
```

The official DSH CLI initializes the `web` Profile if it does not exist, asks
`pnpm` to install the selected package, and adds the plugin's bundle layer. No
Relay checkout is required. If you already installed the `dsh` command, replace
the `npx @deepseek-ai/dsh@0.1.1-rc.2` prefix with `dsh` in any command above.

### 3. Start or restart DSH Web

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 web
```

If you use an installed command, run `dsh web` instead. Bundle membership is read
at startup, so restarting after installation, update, or removal is required.

### 4. Start a Codex conversation

1. Open the DSH URL printed in the terminal. The default is
   `http://127.0.0.1:3080`.
2. On first launch, read the DSH testing notice and select **Continue**.
3. Select **Add workspace** in the left sidebar and choose the project directory
   Codex may work in.
4. Select **New Session**.
5. Open the mode menu labeled **Standard mode** and choose **Codex**.
6. Enter a message and send it. Choose the backend before the first message;
   existing sessions keep the backend with which they were created.

There is no separate activation command. A successful install plus a DSH restart
activates the bundle and registers the managed **Codex** mode automatically.

## What Works

- One persistent Codex App Server Thread per DSH Session
- Model and reasoning-effort selection
- Streaming answers and reasoning in the native DSH conversation
- DSH approval and user-question flows
- Images, tool activity, interruption, and continuation
- Generic DSH tools exposed under the Codex App Server `dsh` namespace
- Optional terminal transport when the separate Relay terminal plugin is present

Tools execute through the owning Agent's DSH tool runtime and remain subject to
DSH permissions and Codex approval behavior.

## Plugin Boundary and Relay

This repository was designed and compatibility-tested in
[Relay](https://github.com/yangbobo2021/Relay), an open-source project for
long-running agent work, external-event delivery, reusable DSH workbench views,
and multiple conversation backends.

The plugin is independently installable. It has no runtime dependency on the
Relay application, Relay Events, or another Relay plugin. It does not replace the
official DSH layout or install Files and Terminal views. This separation lets a
user install only Codex while the broader Relay project can compose Codex, Claude,
events, waits, monitors, and workbench extensions when those capabilities are
needed.

Explore or star Relay to follow that broader work:
<https://github.com/yangbobo2021/Relay>.

## Update, Inspect, or Remove

Stop DSH Web before changing the bundle, then restart it afterward.

```bash
# Show why the plugin is installed
dsh plugin --profile web why relay-dsh-plugin-codex

# Update the npm dependency
dsh plugin --profile web update relay-dsh-plugin-codex

# Remove it
dsh plugin --profile web remove relay-dsh-plugin-codex
```

Use the `npx @deepseek-ai/dsh@0.1.1-rc.2` prefix instead of `dsh` when you do not
have a persistent DSH command.

## Troubleshooting

### Codex is missing from the mode menu

Restart DSH Web. Then run `dsh plugin --profile web why
relay-dsh-plugin-codex`. If pnpm cannot find the package, repeat the npm
installation command and read its final error.

### The first message reports an authentication or executable error

Run `codex login` with an official Codex client under the same operating-system
user that starts DSH, then restart DSH. The plugin normally uses its bundled
official `@openai/codex` runtime and does not depend on `PATH`.

If the error says the bundled runtime is missing, update or reinstall the plugin
so the package manager restores the platform-specific optional dependency. A
managed deployment can explicitly select another native Codex executable:

```bash
# macOS or Linux
RELAY_CODEX_COMMAND=/absolute/path/to/codex dsh web
```

```powershell
# Windows PowerShell
$env:RELAY_CODEX_COMMAND = 'C:\absolute\path\to\codex.exe'
dsh web
```

The DSH bundle configuration property `codexCommand` has higher priority than
`RELAY_CODEX_COMMAND`. Prefer an absolute native executable path; leaving both
unset selects the bundled, plugin-tested Codex version.

### The composer is disabled

DSH requires a workspace before starting a coding conversation. Select **Add
workspace**, choose a directory, and return to **New Session**.

### Installation says pnpm is missing

Install pnpm using its [official installation guide](https://pnpm.io/installation)
and confirm `pnpm --version` works in the same terminal.

### DSH changed and the plugin no longer starts

DSH is a developer preview. Include the output of `dsh --version`, the plugin
source revision, and the startup error in a
[GitHub issue](https://github.com/yangbobo2021/relay-dsh-plugin-codex/issues).

## Development

```bash
git clone https://github.com/yangbobo2021/relay-dsh-plugin-codex.git
cd relay-dsh-plugin-codex
npm install
DSH_ROOT=/path/to/deepseek-harness npm run verify
npm pack
```

`npm run verify` runs type checking, tests, and the production build. Boundary
tests reject accidental runtime dependencies on Relay or another feature plugin.

## Feedback

Report bugs and feature requests in this repository's
[issue tracker](https://github.com/yangbobo2021/relay-dsh-plugin-codex/issues).
