import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/react-select'

type SelectSeparatorProps = React.ComponentProps<typeof Separator>

export const SelectSeparator = ({
  className,
  ...props
}: SelectSeparatorProps) => (
  <Separator
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
)
