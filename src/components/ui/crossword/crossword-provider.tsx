import { useCallback, useMemo, useState } from 'react'
import { CrosswordContext, IActiveDirection, IActiveIndex } from '.'
import { IPuzzle } from '@/types'

export function CrosswordProvider({
  data,
  children
}: {
  data: IPuzzle
  children: React.ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState<IActiveIndex>(null)
  const [activeDirection, setActiveDirection] =
    useState<IActiveDirection>('row')

  const toggleActiveDirection = useCallback(() => {
    setActiveDirection((prev) => (prev === 'row' ? 'col' : 'row'))
  }, [])

  const value = useMemo(
    () => ({
      puzzle: data,
      activeIndex,
      setActiveIndex,
      activeDirection,
      setActiveDirection,
      toggleActiveDirection
    }),
    [activeIndex, activeDirection]
  )

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-muted-foreground">No data</p>
      </div>
    )
  }

  return <CrosswordContext value={value}>{children}</CrosswordContext>
}
