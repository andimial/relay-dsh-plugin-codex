# Relay Codex Plugin for DeepSeek Harness

Run native Codex conversations inside [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH).
Each DSH Session owns one Codex App Server Thread, so Codex keeps its own model
context and execution lifecycle while DSH provides the conversation UI.

This repository is developed as part of [Relay](https://github.com/yangbobo2021/Relay),
an open-source project for long-running agent work, external events, DSH
integrations, and composable agent backends. The plugin is independently
installable: using it does not require the Relay application or any other Relay
plugin.

## What It Adds

- A **Codex** choice on DSH's native New Session screen.
- One durable Codex App Server Thread for each Codex-backed DSH Session.
- Model and reasoning-effort selection.
- Approval and user-question flows in the DSH conversation.
- Images, tool activity, interruption, and context continuation.
- Generic access to tools contributed by other installed DSH plugins.
- An optional Codex App Server terminal-provider contribution when the separate
  Relay terminal plugin is installed.

DSH tools are exposed to Codex under the App Server `dsh` namespace and execute
through the owning Agent's DSH tool runtime. This plugin consumes the public DSH
tool surface; it does not import or detect another plugin's implementation.

## Requirements

- Node.js 22.13 or newer.
- A current DeepSeek Harness installation with the `web` profile.
- `pnpm` on `PATH`, as required by DSH plugin management.
- The Codex CLI installed and authenticated for the current user.

## Install

The plugin can be installed directly from GitHub today:

```bash
dsh plugin --profile web add github:yangbobo2021/relay-dsh-plugin-codex
```

Restart the running DSH Web profile after installation. Open **New Session** and
choose **Codex**.

The package name is `@relay/dsh-plugin-codex`. After an npm release is available,
the equivalent registry installation is:

```bash
dsh plugin --profile web add @relay/dsh-plugin-codex
```

Remove the plugin and restart the profile with:

```bash
dsh plugin --profile web remove @relay/dsh-plugin-codex
```

## Plugin Boundary

This package owns only the Codex conversation backend and its small native DSH
conversation surfaces. It has no runtime dependency on Relay Events or another
Relay plugin. Installing it does not:

- add Wait, Monitor, callback, or event-routing behavior;
- replace the official DSH layout; or
- install Files or Terminal views.

Those capabilities are optional, independently composed plugins. Relay Events can
be installed when external events should resume conversations, while Relay's
Workbench, Files, and Terminal plugins provide additional DSH Web surfaces. Codex
works without any of them.

## Relationship to Relay

[Relay](https://github.com/yangbobo2021/Relay) is the integration and compatibility
home in which this plugin was designed and validated. Relay combines DSH
conversations with durable waits, monitors, external-event delivery, reusable
workbench views, and multiple agent backends. This repository is kept separate so
Codex users can install only the backend they need and so the plugin can track
official DSH releases without carrying the full Relay runtime.

Explore or star the Relay repository to follow the broader multi-backend DSH and
long-running-agent work: <https://github.com/yangbobo2021/Relay>.

## Development

Clone the plugin, install its development dependencies, and point verification at
an official DSH checkout:

```bash
git clone https://github.com/yangbobo2021/relay-dsh-plugin-codex.git
cd relay-dsh-plugin-codex
npm install
DSH_ROOT=/path/to/deepseek-harness npm run verify
npm pack
```

`npm run verify` runs type checking, tests, and the production build. The plugin's
test suite includes independence and package-boundary checks so an accidental
dependency on Relay or another feature plugin fails validation.

## Status and Feedback

The plugin is under active development. Report integration problems or feature
requests in this repository's [issue tracker](https://github.com/yangbobo2021/relay-dsh-plugin-codex/issues).
