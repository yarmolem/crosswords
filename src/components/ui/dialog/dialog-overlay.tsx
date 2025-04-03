import { cn } from '@/lib/utils'
import { Overlay } from '@radix-ui/react-alert-dialog'

type DialogOverlayProps = React.ComponentProps<typeof Overlay>

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <Overlay
    className={cn(
      'fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
)
