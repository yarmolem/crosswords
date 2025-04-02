import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { useCrossword } from './use-crossword'

const Keyboard = lazy(() =>
  import('@/components/ui/keyboard').then((module) => ({
    default: module.Keyboard
  }))
)

export function CrosswordKeyboard() {
  const crossword = useCrossword()

  return (
    <Suspense
      fallback={
        <div className="w-full h-[160px] flex items-center justify-center">
          <Loader className="size-6 animate-spin" />
        </div>
      }
    >
      <Keyboard
        onKeyPress={(button) => {
          if (!crossword.activeIndex) return

          crossword.handleCellChange(
            crossword.activeIndex,
            button === '{bksp}' ? '' : button
          )

          crossword.setNextCellByDirection()
        }}
      />
    </Suspense>
  )
}
