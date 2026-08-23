import type { IApiClient } from '@deepseek-ai/dsh-api-remotes/client'
import type { ClientContext, SessionId } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { AdvancedDebugPreference } from '../../advanced-debug-preference.mjs'
import {
  AdvancedDebugGuard,
  AdvancedDebugSection,
  HiddenSessionLogAction,
  type AdvancedDebugInjected,
} from './AdvancedDebug.tsx'
import { CodexActivityView } from './CodexActivityView.tsx'
import { codexActivityDefinition } from './codex-activity.ts'
import { en, zh, type CodexLocaleKey } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'relay.codex': CodexLocaleKey
  }
}

interface ConnectionFace { api: { sessions: Pick<IApiClient['sessions'], 'models' | 'selectModel'> } }
interface ModelGroup { readonly id: string; readonly models: readonly { readonly id: string; readonly reasoning?: { readonly defaultEffort?: string } }[] }

export const inject = ['slots', 'theme', 'locale', 'sessions', 'connection', 'conversationEvents']

export function apply(ctx: ClientContext): () => void {
  applyAdvancedDebug(ctx)
  ctx.conversationEvents.register(codexActivityDefinition)
  ctx.slots.inject('conversation.chat.node', () => ctx.slots.register({
    name: 'conversation.chat.node', key: 'relay-codex-activity',
  }, CodexActivityView))
  return installModelSelection(ctx, 'relay-codex', 'relay-codex', 'relay-claude')
}

function applyAdvancedDebug(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register('relay.codex', { zh, en }), 'relay-codex: dictionaries')
  const t = ctx.locale.bind('relay.codex')
  const advancedDebug = new AdvancedDebugPreference()
  const hooks: Pick<AdvancedDebugInjected, 'hooks'> = { hooks: { advancedDebug } }
  ctx.effect(() => () => { advancedDebug.dispose() }, 'relay-codex: advanced debug preference')
  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section', id: 'relay-codex-advanced-debug', order: 90,
    label: () => t('advancedNav'), locale: 'relay.codex',
    inject: (): AdvancedDebugInjected => ({ ...hooks, setAdvancedDebug: enabled => { advancedDebug.set(enabled) } }),
  }, AdvancedDebugSection))
  ctx.slots.inject('conversation.session.header.actions', () => ctx.slots.register({
    name: 'conversation.session.header.actions', id: 'relay-codex-advanced-debug-guard', order: -20,
    inject: () => hooks,
  }, AdvancedDebugGuard))
  ctx.slots.inject('conversation.session.header.utilities', () => {
    let removeShadow: (() => void) | undefined
    const reconcile = (): void => {
      if (advancedDebug.getSnapshot()) {
        removeShadow?.(); removeShadow = undefined
      } else if (removeShadow === undefined) {
        removeShadow = ctx.slots.register({
          name: 'conversation.session.header.utilities', id: 'session-log-download', priority: -100,
        }, HiddenSessionLogAction)
      }
    }
    const unsubscribe = advancedDebug.subscribe(reconcile); reconcile()
    return () => { unsubscribe(); removeShadow?.() }
  })
}

function installModelSelection(ctx: ClientContext, preset: string, provider: string, otherProvider: string): () => void {
  const connection = ctx.get('connection' as never) as unknown as ConnectionFace
  const selecting = new Set<string>()
  const sync = (): void => {
    const list = ctx.sessions.list.getSnapshot()
    const id = list.current
    if (id === undefined || list.byId[id]?.blank !== true || selecting.has(id)) return
    const selectedPreset = list.byId[id]?.agentPreset
    if (selectedPreset !== preset && selectedPreset === otherProvider) return
    selecting.add(id)
    void connection.api.sessions.models({ sessionId: id }).then(async (response: Awaited<ReturnType<ConnectionFace['api']['sessions']['models']>>) => {
      const { result } = response
      if (!result.ok) return
      const target = selectedPreset === preset
        ? (result.value.groups as readonly ModelGroup[]).find(group => group.id === provider)
        : result.value.current.provider === provider
          ? (result.value.groups as readonly ModelGroup[]).find(group => group.id !== provider && group.id !== otherProvider)
          : undefined
      const model = target?.models[0]
      if (target && model) await connection.api.sessions.selectModel({ sessionId: id as SessionId, provider: target.id, model: model.id, ...(model.reasoning?.defaultEffort ? { reasoningEffort: model.reasoning.defaultEffort } : {}) })
    }).catch(() => {}).finally(() => { selecting.delete(id) })
  }
  const off = ctx.sessions.list.subscribe(sync); sync(); return off
}
