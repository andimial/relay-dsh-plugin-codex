import { type ReactNode } from 'react'
import type {
  InjectFace, PropsLocale, PropsRuntime,
} from '@deepseek-ai/dsh-client-ui-slots'
import css from './AdvancedDebug.module.css'
import { statusLocaleKey } from './codex-status-client.mjs'
import { useCodexStatus } from './CodexStatus.tsx'

export interface AdvancedDebugSource {
  getSnapshot: () => boolean
  subscribe: (listener: () => void) => () => void
}

export interface AdvancedDebugInjected {
  hooks: { advancedDebug: AdvancedDebugSource }
  setAdvancedDebug: (enabled: boolean) => void
}

type AdvancedDebugSectionProps = PropsRuntime<'settings.section'>
  & InjectFace<AdvancedDebugInjected>
  & PropsLocale<'relay.codex'>

export function AdvancedDebugSection({
  useAdvancedDebug, setAdvancedDebug, t,
}: AdvancedDebugSectionProps): ReactNode {
  const enabled = useAdvancedDebug(value => value)
  const codexStatus = useCodexStatus()
  return (
    <section className={css.section}>
      <div className={css.statusRow} data-codex-status={codexStatus?.state ?? 'loading'}>
        <span className={css.statusDot} aria-hidden="true" />
        <div className={css.settingCopy}>
          <strong>{t('statusTitle')}: {t(statusLocaleKey(codexStatus))}</strong>
          <span>{codexStatus === null ? t('statusLoadingDetail') : `${codexStatus.message} ${codexStatus.action ?? ''}`.trim()}</span>
          {codexStatus !== null && <code>{codexStatus.code}</code>}
        </div>
      </div>
      <div className={css.settingRow}>
        <div className={css.settingCopy}>
          <strong>{t('advancedDebug')}</strong>
          <span>{t('advancedDebugDetail')}</span>
        </div>
        <label className={css.switch}>
          <input
            type="checkbox"
            role="switch"
            aria-label={t('advancedDebug')}
            checked={enabled}
            onChange={event => { setAdvancedDebug(event.currentTarget.checked) }}
          />
          <span aria-hidden="true" />
        </label>
      </div>
    </section>
  )
}

export function HiddenSessionLogAction(): null {
  return null
}
