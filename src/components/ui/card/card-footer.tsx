import { cn } from '@/lib/utils'

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)
