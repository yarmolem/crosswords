import { useTimer } from '@/components/shared/timer'

export function CrosswordCountDown() {
  const { count } = useTimer()

  return (
    <div className="px-3.5 pt-3.5">
      <p className="text-2xl font-bold text-center">{count}</p>
    </div>
  )
}
