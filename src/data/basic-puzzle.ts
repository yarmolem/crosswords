import type { IPuzzle } from '@/types'

export const basicPuzzle: IPuzzle = {
  slug: 'basic-puzzle',
  title: 'Basic Puzzle',
  description: 'This is a basic puzzle',
  rows: 5,
  cols: 5,
  clues: {
    row: [
      { label: 'Pet that purss' },
      { label: 'One-person musical performance ' },
      { label: '⏸️ on a YouTube video' },
      { label: 'Hairdo with a pick' },
      { label: 'In need of a towel' }
    ],
    col: [
      { label: 'Furry foot' },
      { label: 'Opposite of “out” in baseball' },
      { label: 'Where lawyers and judges work' },
      { label: 'In addition' },
      { label: 'One of five on a foot' }
    ]
  },
  boxes: {
    0: { disabled: true },
    1: { disabled: true },
    2: { label: '1' },
    3: { label: '2' },
    4: { label: '3' },
    5: { disabled: true },
    6: { label: '4' },
    10: { label: '5' },
    15: { label: '6' },
    19: { disabled: true },
    20: { label: '7' },
    23: { disabled: true },
    24: { disabled: true }
  },
  solution: [
    ['#', '#', 'C', 'A', 'T'],
    ['#', 'S', 'O', 'L', 'O'],
    ['P', 'A', 'U', 'S', 'E'],
    ['A', 'F', 'R', 'O', '#'],
    ['W', 'E', 'T', '#', '#']
  ]
}
