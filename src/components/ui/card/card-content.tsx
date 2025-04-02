import { cn } from '@/lib/utils'

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)
