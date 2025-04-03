import { useEffect, useRef, useState } from 'react'

export function useCountDown({
  initialValue = 60,
  onFinish
}: {
  initialValue?: number
  onFinish?: () => void
}) {
  const [count, setCount] = useState(initialValue)

  const handleFinishRef = useRef(onFinish)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          handleFinishRef.current?.()

          if (timerRef.current) {
            clearInterval(timerRef.current)
          }

          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return { count, isFinished: count === 0 }
}
