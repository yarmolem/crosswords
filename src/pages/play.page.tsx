import PageLayout from '@/components/layout/page.layout'

import { Card } from '@/components/ui/card'
import {
  CrosswordGrid,
  CrosswordKeyboard,
  CrosswordProvider
} from '@/components/ui/crossword'

export default function PlayPage() {
  return (
    <>
      <PageLayout>
        <CrosswordProvider>
          <Card className="w-[90dvw] max-w-md">
            <CrosswordGrid />
            <CrosswordKeyboard />
          </Card>
        </CrosswordProvider>
      </PageLayout>
    </>
  )
}
