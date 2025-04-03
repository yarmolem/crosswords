import { useState } from 'react'
import { Link } from 'react-router'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectTrigger
} from '@/components/ui/select'
import { buttonVariants } from '@/components/ui/button'
import PageLayout from '@/components/layout/page.layout'

import { cn } from '@/lib/utils'
import { puzzles } from '@/data'
import { basicPuzzle } from '@/data/basic-puzzle'
import HERO_IMAGE from '@/assets/images/hero.webp'

export default function HomePage() {
  const [puzzle, setPuzzle] = useState(basicPuzzle)

  return (
    <>
      <PageLayout>
        <Card className="w-[90dvw] max-w-sm">
          <CardHeader>
            <CardTitle className="text-center text-4xl">Crossword</CardTitle>
            <CardDescription className="text-center">
              Try the mini crossword game to test your knowledge of the
              vocabulary.
            </CardDescription>
          </CardHeader>

          <div className="w-full aspect-[16/12] overflow-hidden pb-6">
            <img
              alt="Hero"
              width={380}
              height={277}
              src={HERO_IMAGE}
              className="w-full h-full object-contain"
            />
          </div>

          <CardContent className="space-y-4">
            <Select
              value={puzzle.slug}
              onValueChange={(value) => {
                setPuzzle(puzzles[value as string])
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a puzzle" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.values(puzzles).map((puzzle) => (
                    <SelectItem key={puzzle.slug} value={puzzle.slug}>
                      {puzzle.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Link
              to={`/play/${puzzle.slug}`}
              className={cn(buttonVariants({ variant: 'neutral' }), 'w-full')}
            >
              Play
            </Link>
          </CardContent>
        </Card>
      </PageLayout>
    </>
  )
}
