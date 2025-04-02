import { lazy, Suspense, useState } from 'react'
import { Loader } from 'lucide-react'

import PageLayout from '@/components/layout/page.layout'
import { Card, CardContent } from '@/components/ui/card'

const Keyboard = lazy(() =>
  import('@/components/ui/keyboard').then((module) => ({
    default: module.Keyboard
  }))
)

export default function PlayPage() {
  const [input, setInput] = useState('')

  return (
    <>
      <PageLayout>
        <Card className="w-[90dvw] max-w-md">
          <CardContent className="p-0">
            <input
              type="text"
              className="w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Suspense
              fallback={
                <div className="w-full h-[160px] flex items-center justify-center">
                  <Loader className="size-6 animate-spin" />
                </div>
              }
            >
              <Keyboard
                onKeyPress={(button) => {
                  if (button === '{bksp}') {
                    setInput(input.slice(0, -1))
                  } else {
                    setInput(input + button)
                  }
                }}
              />
            </Suspense>
          </CardContent>
        </Card>
      </PageLayout>
    </>
  )
}
