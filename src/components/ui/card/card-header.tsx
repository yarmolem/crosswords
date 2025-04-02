import { cn } from '@/lib/utils'

export const CardHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
)
