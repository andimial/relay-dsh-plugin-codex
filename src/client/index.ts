import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { AdvancedDebugPreference } from '../../advanced-debug-preference.mjs'
import { installModelSelection, type ModelSelectionContext } from '../../model-selection.mjs'
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

export const inject = ['slots', 'theme', 'locale', 'sessions', 'connection', 'conversationEvents']

export function apply(ctx: ClientContext): () => void {
  applyAdvancedDebug(ctx)
  ctx.conversationEvents.register(codexActivityDefinition)
  ctx.slots.inject('conversation.chat.node', () => ctx.slots.register({
    name: 'conversation.chat.node', key: 'relay-codex-activity',
  }, CodexActivityView))
  return installModelSelection(ctx as ModelSelectionContext, 'relay-codex', 'relay-codex', 'relay-claude')
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
