import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '../button'

export function CrosswordClues() {
  return (
    <>
      <div className="p-3.5 gap-x-4 flex items-center">
        <Button variant="neutral" size="icon" className="size-8">
          <ChevronLeftIcon className="size-6" />
        </Button>

        <p className="font-semibold translate-x-box-shadow-x">Clue</p>

        <Button variant="neutral" size="icon" className="size-8 ml-auto">
          <ChevronRightIcon className="size-6" />
        </Button>
      </div>
    </>
  )
}
