import {
  Portal,
  Content,
  Viewport,
  ScrollDownButton,
  ScrollUpButton
} from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'

type SelectContentProps = React.ComponentProps<typeof Content>

export const SelectContent = ({
  children,
  className,
  position = 'popper',
  ...props
}: SelectContentProps) => (
  <Portal>
    <Content
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-base border-2 border-border bg-main font-base text-mtext data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      {/* Scroll up button */}
      <ScrollUpButton
        className={cn(
          'flex cursor-default text-mtext items-center justify-center py-1',
          className
        )}
        {...props}
      >
        <ChevronUp className="h-4 w-4" />
      </ScrollUpButton>

      {/* Viewport */}
      <Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </Viewport>

      {/* Scroll down button */}
      <ScrollDownButton
        className={cn(
          'flex cursor-default text-mtext items-center justify-center py-1 font-base',
          className
        )}
        {...props}
      >
        <ChevronDown className="h-4 w-4" />
      </ScrollDownButton>
    </Content>
  </Portal>
)
