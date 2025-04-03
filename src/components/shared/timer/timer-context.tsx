import { createContext } from 'react'

export type TimerContextType = {
  count: number
  isFinished: boolean
}

export const TimerContext = createContext<TimerContextType>({
  count: 0,
  isFinished: false
})
