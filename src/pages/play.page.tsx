import PageLayout from '@/components/layout/page.layout'

import { Card } from '@/components/ui/card'
import {
  CrosswordGrid,
  CrosswordKeyboard,
  CrosswordProvider
} from '@/components/ui/crossword'
import { CrosswordClues } from '@/components/ui/crossword/crossword-clues'
import { basicPuzzleTwo } from '@/data/basic-puzzle-2'

export default function PlayPage() {
  return (
    <>
      <PageLayout>
        <CrosswordProvider data={basicPuzzleTwo}>
          <Card className="w-[90dvw] max-w-md">
            <CrosswordGrid />
            <CrosswordClues />
            <CrosswordKeyboard />
          </Card>
        </CrosswordProvider>
      </PageLayout>
    </>
  )
}
