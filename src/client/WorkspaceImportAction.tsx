import { useRef, useState, type ReactNode } from 'react'
import {
  Button,
  IconDownloadOutline16,
  Modal,
  Tooltip,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type {
  InjectFace,
  PropsLocale,
  PropsRuntime,
} from '@deepseek-ai/dsh-client-ui-slots'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import { resolveImportWorkspace } from './workspace-import-client.mjs'
import {
  workspaceImportUiPolicy,
  type WorkspaceImportUiAction,
} from './workspace-import-ui-policy.mjs'
import css from './WorkspaceImportAction.module.css'

interface WorkspaceView {
  workspaceId: string
  title: string
  path: string
  sessionIds: readonly string[]
}

interface WorkspaceState {
  items: readonly WorkspaceView[]
  recentWorkspaceId?: string
}

interface SessionState {
  current?: string
}

interface Summary {
  found: number
  existing: number
  recoverable: number
  ready: number
}

interface ImportResult {
  found: number
  imported: number
  existing: number
  failed: number
  failures: readonly { thread: string; message: string }[]
}

interface Progress extends ImportResult {
  completed: number
  total: number
}

interface Observable<T> {
  getSnapshot: () => T
  subscribe: (listener: () => void) => () => void
}

export interface WorkspaceImportInjected {
  hooks: {
    workspaceImportWorkspaces: Observable<WorkspaceState>
    workspaceImportSessions: Observable<SessionState>
  }
  scanWorkspace: (cwd: string) => Promise<{ workspace: { title: string; path: string }; summary: Summary }>
  importWorkspace: (cwd: string, onProgress: (progress: Progress) => void) => Promise<ImportResult>
  refreshWorkspaceState: () => Promise<void>
}

type Props = PropsRuntime<'sidebar.footer.action'>
  & InjectFace<WorkspaceImportInjected>
  & PropsLocale<'relay.codex'>

type Phase = 'idle' | 'no-workspace' | 'scanning' | 'summary' | 'importing' | 'complete' | 'error'

export function WorkspaceImportAction({
  wide,
  useWorkspaceImportWorkspaces,
  useWorkspaceImportSessions,
  scanWorkspace,
  importWorkspace,
  refreshWorkspaceState,
  t,
}: Props): ReactNode {
  const workspaces = useWorkspaceImportWorkspaces(value => value)
  const sessions = useWorkspaceImportSessions(value => value)
  const availableTarget = resolveImportWorkspace(workspaces, sessions) as WorkspaceView | null
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<WorkspaceView | null>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const [summary, setSummary] = useState<Summary | null>(null)
  const [progress, setProgress] = useState<Progress | null>(null)
  const [result, setResult] = useState<ImportResult | null>(null)
  const [error, setError] = useState('')
  const request = useRef(0)

  const close = (): void => {
    if (!workspaceImportUiPolicy(phase, summary?.ready, result?.failed).canClose) return
    request.current += 1
    setOpen(false)
  }

  const scan = (workspace: WorkspaceView): void => {
    const generation = ++request.current
    setPhase('scanning')
    setSummary(null)
    setProgress(null)
    setResult(null)
    setError('')
    void scanWorkspace(workspace.path).then(
      response => {
        if (request.current !== generation) return
        setSummary(response.summary)
        setPhase('summary')
      },
      reason => {
        if (request.current !== generation) return
        setError(messageOf(reason))
        setPhase('error')
      },
    )
  }

  const begin = (): void => {
    const selected = availableTarget
    setTarget(selected)
    setOpen(true)
    if (selected === null) {
      setPhase('no-workspace')
      return
    }
    scan(selected)
  }

  const importAll = (): void => {
    if (target === null || summary === null || summary.ready === 0 || phase === 'importing') return
    const generation = ++request.current
    setPhase('importing')
    setProgress({
      completed: 0,
      total: summary.found,
      found: summary.found,
      imported: 0,
      existing: 0,
      failed: 0,
      failures: [],
    })
    setError('')
    void (async () => {
      try {
        const completed = await importWorkspace(target.path, update => {
          if (request.current === generation) setProgress(update)
        })
        await refreshWorkspaceState()
        if (request.current !== generation) return
        setResult(completed)
        setPhase('complete')
      } catch (reason) {
        if (request.current !== generation) return
        setError(messageOf(reason))
        setPhase('error')
      }
    })()
  }

  const retry = (): void => {
    if (target !== null) scan(target)
  }

  return (
    <>
      <Tooltip label={t('importAction')} delayMs={500} disabled={wide}>
        <button
          type="button"
          className={css.trigger}
          aria-label={t('importAction')}
          onClick={begin}
        >
          <IconDownloadOutline16 size={wide ? 16 : 18} />
          {wide && <span>{t('importAction')}</span>}
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={close}
        title={t('importTitle')}
        closeLabel={t('close')}
        description={t('importDescription')}
        className={css.dialog}
        footer={modalFooter({ phase, summary, result, close, retry, importAll, t })}
      >
        <div className={css.body} aria-live="polite">
          {target !== null && (
            <div className={css.workspace}>
              <strong>{target.title}</strong>
              <span title={target.path}>{target.path}</span>
            </div>
          )}
          {phase === 'no-workspace' && <p className={css.message}>{t('importNoWorkspace')}</p>}
          {phase === 'scanning' && <p className={css.message}>{t('importScanning')}</p>}
          {phase === 'summary' && summary !== null && (
            summary.found === 0
              ? <p className={css.message}>{t('importEmpty')}</p>
              : <SummaryView summary={summary} t={t} />
          )}
          {phase === 'importing' && progress !== null && <ProgressView progress={progress} t={t} />}
          {phase === 'complete' && result !== null && <ResultView result={result} t={t} />}
          {phase === 'error' && <p className={css.error} role="alert">{error || t('importFailed')}</p>}
        </div>
      </Modal>
    </>
  )
}

function SummaryView({ summary, t }: { summary: Summary; t: Props['t'] }): ReactNode {
  return (
    <dl className={css.metrics}>
      <Metric label={t('importFound')} value={summary.found} />
      <Metric label={t('importExisting')} value={summary.existing} />
      <Metric label={t('importRecoverable')} value={summary.recoverable} />
      <Metric label={t('importReady')} value={summary.ready} accent />
    </dl>
  )
}

function ProgressView({ progress, t }: { progress: Progress; t: Props['t'] }): ReactNode {
  const maximum = Math.max(1, progress.total)
  return (
    <div className={css.progress}>
      <div className={css.progressCopy}>
        <strong>{t('importImporting')}</strong>
        <span>{progress.completed} / {progress.total}</span>
      </div>
      <progress value={progress.completed} max={maximum} aria-label={t('importImporting')} />
    </div>
  )
}

function ResultView({ result, t }: { result: ImportResult; t: Props['t'] }): ReactNode {
  return (
    <div>
      <p className={result.failed > 0 ? css.partial : css.success}>
        {result.failed > 0 ? t('importPartial') : t('importComplete')}
      </p>
      <dl className={css.metrics}>
        <Metric label={t('importImported')} value={result.imported} accent />
        <Metric label={t('importExisting')} value={result.existing} />
        <Metric label={t('importFailures')} value={result.failed} danger={result.failed > 0} />
      </dl>
      {result.failures.length > 0 && (
        <ul className={css.failures} aria-label={t('importFailures')}>
          {result.failures.map(failure => (
            <li key={failure.thread}>
              <code>{failure.thread}</code>
              <span>{failure.message}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Metric({
  label, value, accent = false, danger = false,
}: { label: string; value: number; accent?: boolean; danger?: boolean }): ReactNode {
  return (
    <div className={css.metric}>
      <dt>{label}</dt>
      <dd className={danger ? css.dangerValue : accent ? css.accentValue : undefined}>{value}</dd>
    </div>
  )
}

function modalFooter({
  phase, summary, result, close, retry, importAll, t,
}: {
  phase: Phase
  summary: Summary | null
  result: ImportResult | null
  close: () => void
  retry: () => void
  importAll: () => void
  t: Props['t']
}): ReactNode {
  const policy = workspaceImportUiPolicy(phase, summary?.ready, result?.failed)
  const actions: Record<WorkspaceImportUiAction, (() => void) | undefined> = {
    cancel: close,
    close,
    'import-all': importAll,
    importing: undefined,
    retry,
  }
  const labels: Record<WorkspaceImportUiAction, string> = {
    cancel: t('cancel'),
    close: t('close'),
    'import-all': t('importAll'),
    importing: t('importImporting'),
    retry: t('retry'),
  }
  return (
    <>
      {policy.secondary !== undefined && (
        <Button variant="outline" onClick={actions[policy.secondary]}>
          {labels[policy.secondary]}
        </Button>
      )}
      <Button
        variant={policy.primary === 'close' ? 'outline' : undefined}
        disabled={policy.primaryDisabled}
        onClick={actions[policy.primary]}
      >
        {labels[policy.primary]}
      </Button>
    </>
  )
}

function messageOf(reason: unknown): string {
  return reason instanceof Error ? reason.message : String(reason)
}
