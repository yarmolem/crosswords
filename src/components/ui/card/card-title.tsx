import { cn } from '@/lib/utils'

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<'h3'>) => (
  <h3
    className={cn(
      'text-xl leading-none font-heading tracking-tight',
      className
    )}
    {...props}
  />
)
