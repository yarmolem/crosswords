import { cva, type VariantProps } from 'class-variance-authority'

export type IButtonVariants = VariantProps<typeof buttonVariants>

export const buttonVariants = cva(
  'inline-flex items-center font-semibold justify-center whitespace-nowrap rounded text-sm font-base ring-offset transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-mtext bg-main border-2 border-border shadow-shadow hover:translate-x-box-shadow-x hover:translate-y-box-shadow-y hover:shadow-none',
        noShadow: 'text-mtext bg-main border-2 border-border',
        neutral:
          'bg-bw text-text border-2 border-border shadow-shadow hover:translate-x-box-shadow-x hover:translate-y-box-shadow-y hover:shadow-none',
        reverse:
          'text-mtext bg-main border-2 border-border hover:translate-x-reverse-box-shadow-x hover:translate-y-reverse-box-shadow-y hover:shadow-shadow'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
