import { use } from 'react'
import { CrosswordContext } from '.'

export function useCrossword() {
  const ctx = use(CrosswordContext)
  if (!ctx) {
    throw new Error('useCrossword must be used within a CrosswordProvider')
  }
  return ctx
}
