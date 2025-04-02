import { cn } from '@/lib/utils'

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p className={cn('text-sm text-mtext font-base', className)} {...props} />
)
