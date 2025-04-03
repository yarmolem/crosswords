import { IPuzzle, IPuzzleCell } from '@/types'
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
  puzzle: IPuzzle
  isSolved: boolean
  cells: Record<number, IPuzzleCell>
  activeIndex: IActiveIndex
  activeDirection: IActiveDirection
  setIsSolved: (isSolved: boolean) => void
  setActiveIndex: (index: IActiveIndex) => void
  setActiveDirection: (direction: IActiveDirection) => void
  toggleActiveDirection: () => void
  handleCellChange: (index: number, value: string) => void
}
export const CrosswordContext = createContext<CrosswordContextType>({
  puzzle: {} as IPuzzle,
  isSolved: false,
  cells: {} as Record<number, IPuzzleCell>,
  activeIndex: null,
  activeDirection: 'row',
  setIsSolved: () => {},
  setActiveIndex: () => {},
  setActiveDirection: () => {},
  toggleActiveDirection: () => {},
  handleCellChange: () => {}
})
