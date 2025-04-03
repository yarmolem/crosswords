import { ChevronDown } from 'lucide-react'
import { Icon, Trigger } from '@radix-ui/react-select'

import { cn } from '@/lib/utils'

type SelectTriggerProps = React.ComponentProps<typeof Trigger>

export const SelectTrigger = ({
  className,
  children,
  ...props
}: SelectTriggerProps) => (
  <Trigger
    className={cn(
      'flex h-10 w-full items-center text-mtext bg-main justify-between rounded-base border-2 border-border px-3 py-2 text-sm font-base ring-offset-white placeholder:text-mtext placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <ChevronDown className="h-4 w-4" />
    </Icon>
  </Trigger>
)
