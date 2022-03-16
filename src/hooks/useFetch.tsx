import { useState, useEffect } from "react"

export type setErrorProps = string | null
export type setIsPendingProps = boolean

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>()
  const [isPending, setIsPending] = useState<setIsPendingProps>(false)
  const [error, setError] = useState<setErrorProps>()

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setIsPending(true)
      try {
        const response = await fetch(url.toString(), {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log("The fetch was aborted")
        } else {
          setIsPending(false)
          setError("Could not load data")
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}

export { useFetch }
