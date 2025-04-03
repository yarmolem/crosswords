import PageLayout from '@/components/layout/page.layout'

import { Card } from '@/components/ui/card'
import {
  CrosswordGrid,
  CrosswordClues,
  CrosswordKeyboard,
  CrosswordProvider,
  CrosswordConfetti,
  CrosswordDialogSuccess
} from '@/components/ui/crossword'

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
            <CrosswordConfetti />
            <CrosswordDialogSuccess />
          </Card>
        </CrosswordProvider>
      </PageLayout>
    </>
  )
}
