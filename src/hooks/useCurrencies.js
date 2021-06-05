import { useEffect, useReducer } from "react"
import { reducer } from "../reducers"
export const useCurrencies = () => {
  const [{ loading, error, currencies }, dispatch] = useReducer(reducer, {
    loading: false,
    error: "",
    currencies: []
  })
  useEffect(() => {
    let isCancelled = false
    const API_KEY = "aa17f50136ad51b2b6a3237c39895a53a1a3d095"

    dispatch({ type: "FETCH_INIT" })
    fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1d,30d&convert=EUR`
    )
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error("Désolée, nous avons rencontré un problème...")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        if (!isCancelled) {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
      })
      .catch((error) => {
        console.log(error.message)
        if (!isCancelled) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
      })
    return () => {
      isCancelled = true
    }
  }, [])
  return { loading, error, currencies }
}
