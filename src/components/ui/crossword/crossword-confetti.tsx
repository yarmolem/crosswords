import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { useCrossword } from './use-crossword'

export function CrosswordConfetti() {
  const crossword = useCrossword()
  const { width, height } = useWindowSize()

  return crossword.isSolved && <ReactConfetti width={width} height={height} />
}
