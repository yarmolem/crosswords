import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'

const Keyboard = lazy(() =>
  import('@/components/ui/keyboard').then((module) => ({
    default: module.Keyboard
  }))
)

export function CrosswordKeyboard() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[160px] flex items-center justify-center">
          <Loader className="size-6 animate-spin" />
        </div>
      }
    >
      <Keyboard
        onKeyPress={() => {
          /*                 if (button === '{bksp}') {
                    setInput(input.slice(0, -1))
                  } else {
                    setInput(input + button)
                  } */
        }}
      />
    </Suspense>
  )
}
