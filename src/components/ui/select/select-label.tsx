import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-select'

type SelectLabelProps = React.ComponentProps<typeof Label>

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => (
  <Label
    className={cn(
      'border-2 border-transparent py-1.5 pl-8 pr-2 text-sm font-base text-mtext/80',
      className
    )}
    {...props}
  />
)
