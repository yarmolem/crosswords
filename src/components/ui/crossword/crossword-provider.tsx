import { useCallback, useMemo, useState } from 'react'

import {
  findNextCell,
  CrosswordContext,
  type IActiveDirection,
  type IActiveIndex
} from '.'
import type { IPuzzle, IPuzzleCell } from '@/types'

export function CrosswordProvider({
  data,
  children
}: {
  data: IPuzzle
  children: React.ReactNode
}) {
  const [cells, setCells] = useState<Record<number, IPuzzleCell>>({})

  const [activeIndex, setActiveIndex] = useState<IActiveIndex>(() => {
    const { index } = findNextCell({
      data,
      index: 0,
      direction: 'row'
    })

    return index
  })
  const [activeDirection, setActiveDirection] =
    useState<IActiveDirection>('row')

  const toggleActiveDirection = useCallback(() => {
    setActiveDirection((prev) => (prev === 'row' ? 'col' : 'row'))
  }, [])

  const handleCellChange = useCallback((index: number, value: string) => {
    setCells((prev) => ({ ...prev, [index]: { index, value } }))
  }, [])

  const value = useMemo(
    () => ({
      cells,
      puzzle: data,
      activeIndex,
      activeDirection,
      setActiveIndex,
      setActiveDirection,
      handleCellChange,
      toggleActiveDirection
    }),
    [
      data,
      cells,
      activeIndex,
      activeDirection,
      setActiveIndex,
      setActiveDirection,
      handleCellChange,
      toggleActiveDirection
    ]
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
