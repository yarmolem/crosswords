import { useTimer } from '@/components/shared/timer'
import { ClockIcon } from 'lucide-react'

export function CrosswordCountDown() {
  const { count } = useTimer()

  return (
    <div className="px-3.5 pt-3.5 flex items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <ClockIcon className="size-6" />
        <p className="text-2xl font-bold text-center w-[60px]">{count}</p>
      </div>
    </div>
  )
}
