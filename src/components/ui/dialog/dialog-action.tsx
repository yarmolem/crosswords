import { cn } from '@/lib/utils'
import { Action } from '@radix-ui/react-alert-dialog'
import { buttonVariants } from '../button'

export const DialogAction = ({
  className,
  ...props
}: React.ComponentProps<typeof Action>) => (
  <Action className={cn(buttonVariants(), className)} {...props} />
)
