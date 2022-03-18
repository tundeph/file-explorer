import Display from "../pages/Display/Display"
import { ExplorerContextProvider } from "../context/ExplorerContext"

function App() {
  return (
    <ExplorerContextProvider>
      <Display />
    </ExplorerContextProvider>
  )
}

export default App
