import { Link } from 'react-router'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import HERO_IMAGE from '@/assets/images/hero.webp'

export default function HomePage() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-1 items-center justify-center">
        <Card className="w-[90dvw] max-w-sm">
          <CardHeader>
            <CardTitle className="text-center text-4xl">Crossword</CardTitle>
            <CardDescription className="text-center">
              Try the mini crossword game to test your knowledge of the
              vocabulary.
            </CardDescription>
          </CardHeader>

          <img src={HERO_IMAGE} alt="Hero" className="w-full pb-6" />

          <CardContent>
            <Link
              to="/play"
              className={cn(buttonVariants({ variant: 'neutral' }), 'w-full')}
            >
              Play
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
