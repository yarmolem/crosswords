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

export function findNextCell({
  data,
  index,
  direction
}: {
  index: number
  data: IPuzzle
  direction: IActiveDirection
}) {
  const totalRows = data.rows * data.cols

  if (direction === 'row') {
    /* 
      if the current cell is the last cell in the row we have to change
      the direction with index 0
    */
    const nextIndex = index + 1 >= totalRows ? null : index + 1
    if (!nextIndex) return findNextCell({ index: 0, direction: 'col', data })

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
  const isLastCellInCol = index + 1 === totalRows
  if (isLastCellInCol) return findNextCell({ index: 0, direction: 'row', data })

  /* 
      if the current cell is greater than the total rows
      we have to get the current col and add 1 to it
    */
  const nextIndex =
    index + data.cols >= totalRows
      ? getCellCol(index, data.cols) + 1
      : index + data.cols

  const disabled = data.boxes[nextIndex]?.disabled
  if (disabled) return findNextCell({ index: nextIndex, direction, data })

  return {
    index: nextIndex,
    direction
  }
}

export function findNextClue({
  data,
  index,
  direction,
  fromChangeDirection = false
}: {
  index: number
  data: IPuzzle
  direction: IActiveDirection
  fromChangeDirection?: boolean
}) {
  if (direction === 'row') {
    const currentRow = getCellRow(index, data.cols)

    if (fromChangeDirection) {
      return findNextCell({ index: currentRow, direction, data })
    }

    // Find next row and return the index and direction
    const nextRow = currentRow + 1
    const startRowIndex = nextRow * data.rows
    const nextIndex = startRowIndex

    if (nextRow >= data.rows) {
      return findNextClue({
        data,
        index: 0,
        direction: 'col',
        fromChangeDirection: true
      })
    }

    const disabled = data.boxes[nextIndex]?.disabled
    if (disabled) return findNextCell({ index: nextIndex, direction, data })

    return {
      index: nextIndex,
      direction
    }
  }

  const currentCol = getCellCol(index, data.cols)

  if (fromChangeDirection) {
    return findNextCell({ index: currentCol, direction, data })
  }

  const nextCol = currentCol + 1
  const nextIndex = nextCol

  if (nextCol >= data.cols) {
    return findNextClue({
      data,
      index: 0,
      direction: 'row',
      fromChangeDirection: true
    })
  }

  const disabled = data.boxes[nextIndex]?.disabled
  if (disabled) return findNextCell({ index: nextIndex, direction, data })

  return {
    index: nextIndex,
    direction
  }
}

export function findPreviousClue({
  data,
  index,
  direction,
  fromChangeDirection = false
}: {
  index: number
  data: IPuzzle
  direction: IActiveDirection
  fromChangeDirection?: boolean
}): { index: number; direction: IActiveDirection } {
  if (direction === 'row') {
    const currentRow = getCellRow(index, data.cols)

    if (fromChangeDirection) {
      // Cuando cambiamos de dirección, empezamos desde el índice más cercano a 0 en la fila actual
      const rowStartIndex = currentRow * data.cols
      return findFirstValidCellInRange({
        startIndex: rowStartIndex,
        endIndex: rowStartIndex + data.cols - 1,
        direction,
        data,
        increment: 1
      })
    }

    const previousRow = currentRow - 1

    if (previousRow < 0) {
      // Si estamos en la primera fila y vamos hacia atrás, cambiar a dirección columna
      // y buscar la última columna comenzando desde el índice más cercano a 0
      const lastColIndex = data.cols - 1
      return findPreviousClue({
        data,
        direction: 'col',
        index: lastColIndex,
        fromChangeDirection: true
      })
    }

    // Comenzar desde el índice más cercano a 0 de la fila anterior
    const prevRowStartIndex = previousRow * data.cols
    return findFirstValidCellInRange({
      startIndex: prevRowStartIndex,
      endIndex: prevRowStartIndex + data.cols - 1,
      direction,
      data,
      increment: 1
    })
  }

  // Dirección columna
  const currentCol = getCellCol(index, data.cols)

  if (fromChangeDirection) {
    // Cuando cambiamos de dirección, empezamos desde el índice más cercano a 0 en la columna actual
    const colStartIndex = currentCol
    return findFirstValidCellInRange({
      startIndex: colStartIndex,
      endIndex: colStartIndex + (data.rows - 1) * data.cols,
      direction,
      data,
      increment: data.cols
    })
  }

  const previousCol = currentCol - 1

  if (previousCol < 0) {
    // Si estamos en la primera columna y vamos hacia atrás, cambiar a dirección fila
    // y buscar la última fila comenzando desde el índice más cercano a 0
    const lastRowIndex = (data.rows - 1) * data.cols
    return findPreviousClue({
      data,
      direction: 'row',
      index: lastRowIndex,
      fromChangeDirection: true
    })
  }

  // Comenzar desde el índice más cercano a 0 de la columna anterior
  const prevColStartIndex = previousCol
  return findFirstValidCellInRange({
    startIndex: prevColStartIndex,
    endIndex: prevColStartIndex + (data.rows - 1) * data.cols,
    direction,
    data,
    increment: data.cols
  })
}

// Función auxiliar para encontrar la primera celda válida en un rango
export function findFirstValidCellInRange({
  startIndex,
  endIndex,
  direction,
  data,
  increment
}: {
  startIndex: number
  endIndex: number
  direction: IActiveDirection
  data: IPuzzle
  increment: number
}): { index: number; direction: IActiveDirection } {
  for (let i = startIndex; i <= endIndex; i += increment) {
    if (!data.boxes[i]?.disabled) {
      return {
        index: i,
        direction
      }
    }
  }

  // Si no encontramos ninguna celda válida en este rango, avanzamos a la siguiente fila/columna
  if (direction === 'row') {
    const nextRow = getCellRow(startIndex, data.cols) - 1
    if (nextRow < 0) {
      // Cambiar a la última columna
      return findPreviousClue({
        data,
        direction: 'col',
        index: data.cols - 1,
        fromChangeDirection: true
      })
    }
    return findPreviousClue({
      data,
      direction,
      index: nextRow * data.cols,
      fromChangeDirection: true
    })
  } else {
    const nextCol = getCellCol(startIndex, data.cols) - 1
    if (nextCol < 0) {
      // Cambiar a la última fila
      return findPreviousClue({
        data,
        direction: 'row',
        index: (data.rows - 1) * data.cols,
        fromChangeDirection: true
      })
    }
    return findPreviousClue({
      data,
      direction,
      index: nextCol,
      fromChangeDirection: true
    })
  }
}
