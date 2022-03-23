import { useEffect, createContext, useReducer } from "react"

export const ExplorerContext = createContext()

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload, isPending: false, error: null }
    case "IS_PENDING":
      return { ...state, isPending: true, error: null }
    case "IS_ERROR":
      return { ...state, isPending: false, data: null, error: true }
    default:
      return state
  }
}

export const ExplorerContextProvider = ({ children }) => {
  const initialState = {
    data: null,
    isPending: false,
    error: null,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "IS_PENDING" })
      try {
        const response = await fetch("http://localhost:3000/data")
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        dispatch({ type: "GET_DATA", payload: data })
      } catch (err) {
        dispatch({ type: "IS_ERROR" })
      }
    }
    fetchData()
  }, [])

  return (
    <ExplorerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExplorerContext.Provider>
  )
}
