import { cn } from '@/lib/utils'
import { Content } from '@radix-ui/react-alert-dialog'

type DialogContentProps = React.ComponentProps<typeof Content>

export const DialogContent = ({ className, ...props }: DialogContentProps) => (
  <Content
    className={cn(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-base border-2 border-border bg-bg p-6 shadow-shadow duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      className
    )}
    {...props}
  />
)
