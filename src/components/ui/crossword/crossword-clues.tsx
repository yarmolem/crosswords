import { useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '../button'
import { findNextClue, getCellCol, getCellRow, useCrossword } from '.'

export function CrosswordClues() {
  const crossword = useCrossword()

  const clue = useMemo(() => {
    if (crossword.activeIndex === null) return null

    if (crossword.activeDirection === 'row') {
      const row = getCellRow(crossword.activeIndex, crossword.puzzle.cols)
      return crossword?.puzzle?.clues?.row?.[row]?.label
    }

    const col = getCellCol(crossword.activeIndex, crossword.puzzle.cols)
    return crossword?.puzzle?.clues?.col?.[col]?.label
  }, [crossword.activeIndex, crossword.activeDirection, crossword.puzzle])

  return (
    <>
      <div className="p-3.5 gap-x-4 h-[76px] flex items-center">
        <Button
          variant="neutral"
          size="icon"
          className="size-8"
          onClick={() => {
            if (crossword.activeIndex === null) return

            /*             const { index, direction } = findPreviousClue({
              data: crossword.puzzle,
              index: crossword.activeIndex,
              direction: crossword.activeDirection
            })

            crossword.setActiveIndex(index)
            crossword.setActiveDirection(direction) */
          }}
        >
          <ChevronLeftIcon className="size-6" />
        </Button>

        <p className="font-semibold translate-x-box-shadow-x flex-1">{clue}</p>

        <Button
          variant="neutral"
          size="icon"
          className="size-8 ml-auto"
          onClick={() => {
            if (crossword.activeIndex === null) return

            const { index, direction } = findNextClue({
              data: crossword.puzzle,
              index: crossword.activeIndex,
              direction: crossword.activeDirection
            })

            crossword.setActiveIndex(index)
            crossword.setActiveDirection(direction)
          }}
        >
          <ChevronRightIcon className="size-6" />
        </Button>
      </div>
    </>
  )
}
