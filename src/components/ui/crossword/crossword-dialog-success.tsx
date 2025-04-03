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

import { useCrossword } from '.'

export function CrosswordDialogSuccess() {
  const { isSolved } = useCrossword()

  return (
    <Dialog open={isSolved}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="w-[90dvw] max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-5xl">Success</DialogTitle>
            <DialogDescription className="text-2xl">
              You solved the crossword!
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
