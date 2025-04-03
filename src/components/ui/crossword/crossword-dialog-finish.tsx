import { Link } from 'react-router'

import {
  Dialog,
  DialogTitle,
  DialogPortal,
  DialogHeader,
  DialogFooter,
  DialogAction,
  DialogOverlay,
  DialogContent,
  DialogDescription
} from '../dialog'
import { useTimer } from '@/components/shared/timer'

export function CrosswordDialogFinish() {
  const { isFinished } = useTimer()

  return (
    <Dialog open={isFinished}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="w-[90dvw] max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-5xl">Time's up!</DialogTitle>
            <DialogDescription className="text-2xl">
              You didn't solve the crossword in time.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogAction asChild>
              <Link to="/">Go back to home</Link>
            </DialogAction>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
