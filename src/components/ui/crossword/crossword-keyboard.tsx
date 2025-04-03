import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { checkSolution, findNextCell, useCrossword } from '.'

const Keyboard = lazy(() =>
  import('@/components/ui/keyboard').then((module) => ({
    default: module.Keyboard
  }))
)

export function CrosswordKeyboard() {
  const crossword = useCrossword()

  return (
    <div className="w-full h-[160px]">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="size-6 animate-spin" />
          </div>
        }
      >
        <Keyboard
          onKeyPress={(button) => {
            if (crossword.isSolved) return
            if (crossword.activeIndex === null) return

            const isRemoving = button === '{bksp}'

            crossword.handleCellChange(
              crossword.activeIndex,
              isRemoving ? '' : button
            )

            const optimisticCells = {
              ...crossword.cells,
              [crossword.activeIndex]: {
                index: crossword.activeIndex,
                value: isRemoving ? '' : button
              }
            }

            if (checkSolution(crossword.puzzle, optimisticCells)) {
              crossword.setIsSolved(true)
              return
            }

            if (isRemoving) return

            const { index, direction } = findNextCell({
              data: crossword.puzzle,
              index: crossword.activeIndex,
              direction: crossword.activeDirection
            })

            crossword.setActiveIndex(index)
            crossword.setActiveDirection(direction)
          }}
        />
      </Suspense>
    </div>
  )
}
