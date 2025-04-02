import { cn } from '@/lib/utils'
import { buttonVariants, type IButtonVariants } from '.'

export type ButtonProps = React.ComponentProps<'button'> & IButtonVariants

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
