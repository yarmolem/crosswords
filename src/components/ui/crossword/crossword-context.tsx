import { createContext } from 'react'

export const CROSSWORD_DIRECTIONS = {
  ROW: 'row',
  COL: 'col'
} as const

export type ICrosswordDirection =
  (typeof CROSSWORD_DIRECTIONS)[keyof typeof CROSSWORD_DIRECTIONS]

export type IActiveIndex = number | null
export type IActiveDirection = ICrosswordDirection

export interface CrosswordContextType {
  activeIndex: IActiveIndex
  activeDirection: IActiveDirection
  setActiveIndex: (index: IActiveIndex) => void
  setActiveDirection: (direction: IActiveDirection) => void
  toggleActiveDirection: () => void
}
export const CrosswordContext = createContext<CrosswordContextType>({
  activeIndex: null,
  activeDirection: 'row',
  setActiveIndex: () => {},
  setActiveDirection: () => {},
  toggleActiveDirection: () => {}
})
