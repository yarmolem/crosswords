export interface IPuzzle {
  title: string
  description: string
  rows: number
  cols: number
  boxes: {
    [key: number]: {
      label?: string
      disabled?: boolean
    }
  }
  clues: {
    row: {
      [key: number]: { label: string }
    }
    col: {
      [key: number]: { label: string }
    }
  }
}
