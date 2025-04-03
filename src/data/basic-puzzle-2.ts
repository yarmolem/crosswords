import type { IPuzzle } from '@/types'

export const basicPuzzleTwo: IPuzzle = {
  slug: 'basic-puzzle-2',
  title: 'Basic Puzzle 2',
  duration: 120,
  description: 'This is a basic puzzle',
  rows: 5,
  cols: 5,
  clues: {
    row: [
      { label: '"___ do it" (Nike slogan)' },
      { label: 'Continent with Cambodia and South Korea' },
      { label: 'Seat in a park' },
      { label: 'Pigeon sound' },
      { label: 'Direction opposite to "WNW", on a compass: Abbreviation' }
    ],
    col: [
      { label: "Boxer's quick punch" },
      { label: '"___ Me" (Recycle bin words)' },
      {
        label: '"We haven\'t heard from him ___ he left the company last month"'
      },
      { label: 'Mexican snacks in shells' },
      { label: 'Weed-cleaning garden tool' }
    ]
  },
  boxes: {
    0: { label: '1' },
    1: { label: '2' },
    2: { label: '3' },
    3: { label: '4' },
    4: { disabled: true },
    5: { label: '5' },
    9: { disabled: true },
    10: { label: '6' },
    14: { label: '7' },
    15: { disabled: true },
    16: { disabled: true },
    17: { label: '8' },
    20: { disabled: true },
    21: { disabled: true },
    22: { label: '9' }
  },
  solution: [
    ['J', 'U', 'S', 'T', '#'],
    ['A', 'S', 'I', 'A', '#'],
    ['B', 'E', 'N', 'C', 'H'],
    ['#', '#', 'C', 'O', 'O'],
    ['#', '#', 'E', 'S', 'E']
  ]
}
