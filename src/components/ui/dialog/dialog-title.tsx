import { cn } from '@/lib/utils'
import { Title } from '@radix-ui/react-alert-dialog'

export const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => (
  <Title className={cn('text-lg font-heading', className)} {...props} />
)
