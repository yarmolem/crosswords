import { TimerContext } from '.'
import { useCountDown } from '@/hooks/use-count-down'

export function TimerProvider({
  children,
  initialValue = 60
}: {
  children: React.ReactNode
  initialValue?: number
}) {
  const countDown = useCountDown({ initialValue })
  return <TimerContext value={countDown}>{children}</TimerContext>
}
