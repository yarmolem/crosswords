import { StrictMode } from 'react'

import RootRouter from './routers/root.router'

function App() {
  return (
    <>
      <StrictMode>
        <RootRouter />
      </StrictMode>
    </>
  )
}

export default App
