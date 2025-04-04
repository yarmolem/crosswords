import { cn } from '@/lib/utils'
import { useCrossword, getIsActiveInRow, getIsActiveInCol } from '.'

export function CrosswordGrid({ className }: { className?: string }) {
  const crossword = useCrossword()

  const data = crossword.puzzle
  console.log('RENDER')

  return (
    <div className="px-3.5 pt-3.5">
      <ul
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${data.rows}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${data.cols}, minmax(0, 1fr))`
        }}
        className={cn(
          'w-full border-2 aspect-square rounded overflow-hidden',
          className
        )}
      >
        {Array.from({ length: data.rows * data.cols }).map((_, index) => (
          <li
            key={index}
            onClick={() => {
              if (crossword.isSolved) return
              if (data.boxes[index]?.disabled) return
              if (crossword.activeIndex === index) {
                crossword.toggleActiveDirection()
                return
              }

              crossword.setActiveIndex(index)
            }}
            className={cn(
              'flex items-center justify-center',
              'w-full h-full border-b border-r relative transition-colors bg-white',
              /* Borders */
              (index + 1) % data.cols === 0 && 'border-r-0',
              index >= data.cols * (data.rows - 1) && 'border-b-0',

              /* Active Row */
              crossword.activeIndex !== null &&
                crossword.activeDirection === 'row' &&
                getIsActiveInRow(index, data.cols, crossword.activeIndex) &&
                'bg-main',

              /* Active Col */
              crossword.activeIndex !== null &&
                crossword.activeDirection === 'col' &&
                getIsActiveInCol(index, data.cols, crossword.activeIndex) &&
                'bg-main',

              /* Active */
              crossword.activeIndex === index && 'bg-yellow-500',

              /* Solved */
              crossword.isSolved && 'bg-green-500',

              /* Disabled */
              data.boxes[index]?.disabled &&
                'bg-black border-gray-500 pointer-events-none'
            )}
          >
            <span className="absolute top-1 left-2">
              {data.boxes[index]?.label}
            </span>

            <p className="text-4xl font-semibold uppercase">
              {crossword.cells[index]?.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
