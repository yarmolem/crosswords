import { Outlet } from 'react-router'
import { ThemeToggle } from '@/components/shared/theme'

export default function RootLayout() {
  return (
    <main className="flex h-[100dvh] w-[100dvw] flex-col relative">
      <ThemeToggle className="absolute right-4 top-4" />
      <Outlet />
    </main>
  )
}
