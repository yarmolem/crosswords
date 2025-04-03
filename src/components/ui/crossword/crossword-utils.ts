import { IPuzzle } from '@/types'
import { IActiveDirection } from './crossword-context'

export function getCellRow(index: number, cols: number) {
  return Math.floor(index / cols)
}

export function getCellCol(index: number, cols: number) {
  return index % cols
}

export function getIsActiveInRow(
  index: number,
  cols: number,
  activeIndex: number
) {
  return getCellRow(index, cols) === getCellRow(activeIndex, cols)
}

export function getIsActiveInCol(
  index: number,
  cols: number,
  activeIndex: number
) {
  return getCellCol(index, cols) === getCellCol(activeIndex, cols)
}

export function isCellDisabled({
  data,
  index
}: {
  data: IPuzzle
  index: number
}) {
  return Boolean(data?.boxes?.[index]?.disabled)
}

export function getTotalCells(data: IPuzzle) {
  return data.rows * data.cols
}

export function findNextCell({
  data,
  index,
  direction
}: {
  index: number
  data: IPuzzle
  direction: IActiveDirection
}) {
  const totalCells = data.rows * data.cols

  if (direction === 'row') {
    /* 
      if the current cell is the last cell in the row we have to change
      the direction with index 0
    */
    const nextIndex = index + 1 >= totalCells ? null : index + 1
    if (!nextIndex) {
      return findFirstAvailableCell({ index: 0, direction: 'col', data })
    }

    /* 
      if the next cell is disabled we have to keep searching for the next cell
    */
    const disabled = data.boxes[nextIndex]?.disabled
    if (disabled) return findNextCell({ index: nextIndex, direction, data })

    return {
      index: nextIndex,
      direction
    }
  }

  /* 
    if we get to the last cell in the col we have to change the direction with index 0
  */
  const isLastCellInCol = index + 1 === totalCells
  if (isLastCellInCol) {
    return findFirstAvailableCell({ index: 0, direction: 'row', data })
  }

  /* 
      if the current cell is greater than the total rows
      we have to get the current col and add 1 to it
    */
  const nextIndex =
    index + data.cols >= totalCells
      ? getCellCol(index, data.cols) + 1
      : index + data.cols

  const disabled = data.boxes[nextIndex]?.disabled
  if (disabled) return findNextCell({ index: nextIndex, direction, data })

  return {
    index: nextIndex,
    direction
  }
}

export function findFirstAvailableCell({
  data,
  index,
  direction
}: {
  data: IPuzzle
  index: number
  direction: IActiveDirection
}) {
  const totalCells = data.rows * data.cols

  if (direction === 'row') {
    for (let i = index; i < totalCells; i++) {
      if (isCellDisabled({ data, index: i })) continue

      return {
        index: i,
        direction
      }
    }
  } else {
    let col = 0
    let idx = 0

    while (col < data.cols) {
      if (isCellDisabled({ data, index: idx })) {
        idx += data.cols

        if (idx >= totalCells) {
          col++
          idx = col
        }

        continue
      }

      return {
        index: idx,
        direction
      }
    }
  }

  return {
    index: 0,
    direction
  }
}

export function findNextClue({
  data,
  index,
  direction
}: {
  data: IPuzzle
  index: number
  direction: IActiveDirection
}) {
  const totalCells = getTotalCells(data)

  if (direction === 'row') {
    /* 
      1. Find the row of the current cell
      2. Add 1 to the row
      3. Find the first available cell in the new row
      4. Return the index of the first available cell
      5. if there is no first available cell, repeat the process with the next row
    */
    const row = getCellRow(index, data.cols)
    const nextRow = row + 1
    const nextIndex = nextRow * data.cols

    if (nextIndex >= totalCells) {
      return findFirstAvailableCell({ index: 0, direction: 'col', data })
    }

    return findFirstAvailableCell({ index: nextIndex, direction, data })
  }

  const col = getCellCol(index, data.cols)

  if (col + 1 >= data.cols) {
    return findFirstAvailableCell({ index: 0, direction: 'row', data })
  }

  const nextCol = col + 1
  const nextIndex = nextCol

  if (nextIndex >= totalCells) {
    return findFirstAvailableCell({ index: 0, direction: 'row', data })
  }

  if (isCellDisabled({ data, index: nextIndex })) {
    return findNextCell({ index: nextIndex, direction, data })
  }

  return {
    index: nextIndex,
    direction
  }
}

export function findPreviousClue() {}
