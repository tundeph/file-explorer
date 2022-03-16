import { createContext } from "react"

export interface ContextState {
  type: string
  name: string
  added?: string
  files?: {}
}

export interface DisplayContextProps {
  value: any[] | null
  children: React.ReactNode
}

const DisplayContext = createContext<any[] | null>(null)

const DisplayContextProvider = ({ value, children }: DisplayContextProps) => {
  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  )
}

export { DisplayContext, DisplayContextProvider }
