import { Description } from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'

export const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn('text-sm font-base text-text', className)}
    {...props}
  />
)
