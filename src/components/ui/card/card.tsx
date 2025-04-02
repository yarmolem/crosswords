import { cn } from '@/lib/utils'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'rounded-base shadow-shadow border-2 border-border bg-main text-mtext',
      className
    )}
    {...props}
  />
)
