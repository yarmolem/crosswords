export function getCellRow(index: number, cols: number) {
  return Math.floor(index / cols)
}

export function getCellCol(index: number, cols: number) {
  return index % cols
}

export function getActiveRow(index: number, cols: number, activeIndex: number) {
  return getCellRow(index, cols) === getCellRow(activeIndex, cols)
}

export function getActiveCol(index: number, cols: number, activeIndex: number) {
  return getCellCol(index, cols) === getCellCol(activeIndex, cols)
}
