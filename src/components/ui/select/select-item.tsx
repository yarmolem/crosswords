import { ItemIndicator, ItemText } from '@radix-ui/react-select'

import { cn } from '@/lib/utils'
import { Item } from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = React.ComponentProps<typeof Item>

export const SelectItem = ({
  className,
  children,
  ...props
}: SelectItemProps) => (
  <Item
    className={cn(
      'relative flex w-full text-mtext cursor-default select-none items-center rounded-base border-2 border-transparent py-1.5 pl-8 pr-2 text-sm font-base outline-none focus:border-border data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>

    <ItemText>{children}</ItemText>
  </Item>
)
