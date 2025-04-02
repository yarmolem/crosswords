import { MoonIcon, SunIcon } from 'lucide-react'

import { toggleTheme } from '.'
import { Button } from '@/components/ui/button'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <>
      <Button onClick={toggleTheme} size="icon" className={className}>
        <SunIcon className="size-4 dark:hidden" />
        <MoonIcon className="size-4 hidden dark:block" />
      </Button>
    </>
  )
}
