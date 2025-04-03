import { Link, useParams } from 'react-router'

import {
  CrosswordGrid,
  CrosswordClues,
  CrosswordKeyboard,
  CrosswordProvider,
  CrosswordConfetti,
  CrosswordDialogSuccess
} from '@/components/ui/crossword'
import { Card } from '@/components/ui/card'
import PageLayout from '@/components/layout/page.layout'

import { cn } from '@/lib/utils'
import { puzzles } from '@/data'
import { buttonVariants } from '@/components/ui/button'

export default function PlayPage() {
  const { slug } = useParams()

  const puzzle = puzzles[slug as string]

  if (!puzzle) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">Puzzle not found</h1>
        <Link to="/" className={cn(buttonVariants(), 'mt-4')}>
          Go back to home
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageLayout>
        <CrosswordProvider data={puzzle}>
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
