import { use } from 'react'
import { TimerContext } from '.'

export function useTimer() {
  const ctx = use(TimerContext)
  if (!ctx) {
    throw new Error('useTimer must be used within a TimerProvider')
  }

  return ctx
}
