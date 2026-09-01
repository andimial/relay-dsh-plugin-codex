import type { ToolCallViewProps } from '@deepseek-ai/dsh-client-ui-tool/client'

type UseChat = ToolCallViewProps['useChat']
type ChatSnapshot = Parameters<Parameters<UseChat>[0]>[0]
type ChatOwner = { useChat?: UseChat; useSession: ToolCallViewProps['useSession'] }

/** New DSH exposes chat directly; the older session snapshot contains it. */
export function useCompatibleChat<T>(owner: ChatOwner, selector: (chat: ChatSnapshot) => T): T {
  if (owner.useChat) return owner.useChat(selector)
  return owner.useSession(snapshot => {
    if (!('chat' in snapshot)) throw new Error('DSH legacy chat state is unavailable')
    return selector(snapshot.chat as ChatSnapshot)
  })
}
