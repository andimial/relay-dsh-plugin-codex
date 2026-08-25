export type WorkspaceImportUiAction = 'cancel' | 'close' | 'import-all' | 'importing' | 'retry'

export interface WorkspaceImportUiPolicy {
  readonly canClose: boolean
  readonly secondary?: WorkspaceImportUiAction
  readonly primary: WorkspaceImportUiAction
  readonly primaryDisabled: boolean
}

export function workspaceImportUiPolicy(
  phase: string,
  ready?: number,
  failed?: number,
): WorkspaceImportUiPolicy
