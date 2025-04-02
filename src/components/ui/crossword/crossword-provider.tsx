import { useCallback, useMemo, useState } from 'react'
import { CrosswordContext, IActiveDirection, IActiveIndex } from '.'

export function CrosswordProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState<IActiveIndex>(null)
  const [activeDirection, setActiveDirection] =
    useState<IActiveDirection>('row')

  const toggleActiveDirection = useCallback(() => {
    setActiveDirection((prev) => (prev === 'row' ? 'col' : 'row'))
  }, [])

  const value = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      activeDirection,
      setActiveDirection,
      toggleActiveDirection
    }),
    [activeIndex, activeDirection]
  )

  return <CrosswordContext value={value}>{children}</CrosswordContext>
}
