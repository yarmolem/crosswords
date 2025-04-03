import { useCallback, useMemo, useState } from 'react'

import {
  isCellDisabled,
  CrosswordContext,
  findFirstAvailableCell,
  type IActiveIndex,
  type IActiveDirection
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
  const [direction, setDirection] = useState<IActiveDirection>('row')

  const [index, setIndex] = useState<IActiveIndex>(() => {
    if (isCellDisabled({ data, index: 0 })) {
      const { index } = findFirstAvailableCell({
        data,
        index: 0,
        direction: 'row'
      })

      return index
    }

    return 0
  })

  const toggleDirection = useCallback(() => {
    setDirection((prev) => (prev === 'row' ? 'col' : 'row'))
  }, [])

  const handleCellChange = useCallback((index: number, value: string) => {
    setCells((prev) => ({ ...prev, [index]: { index, value } }))
  }, [])

  const value = useMemo(
    () => ({
      cells,
      puzzle: data,
      activeIndex: index,
      activeDirection: direction,
      handleCellChange,
      setActiveIndex: setIndex,
      setActiveDirection: setDirection,
      toggleActiveDirection: toggleDirection
    }),
    [
      data,
      cells,
      index,
      direction,
      setIndex,
      setDirection,
      handleCellChange,
      toggleDirection
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
