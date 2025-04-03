import { cn } from '@/lib/utils'
import { Cancel } from '@radix-ui/react-alert-dialog'
import { buttonVariants } from '../button'

export const DialogCancel = ({
  className,
  ...props
}: React.ComponentProps<typeof Cancel>) => (
  <Cancel
    className={cn(
      buttonVariants({ variant: 'neutral' }),
      'mt-2 sm:mt-0',
      className
    )}
    {...props}
  />
)
