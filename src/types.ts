export interface IPuzzle {
  slug: string
  title: string
  duration: number
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
  solution: string[][]
}

export type IPuzzleCell = {
  index: number
  value: string
}
