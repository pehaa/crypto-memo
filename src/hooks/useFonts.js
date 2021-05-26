import { useEffect, useReducer } from "react"
import { reducer } from "../reducers"
export const useFonts = () => {
  const [{ loading, error, fonts }, dispatch] = useReducer(reducer, {
    loading: false,
    error: "",
    fonts: []
  })
  useEffect(() => {
    let isCancelled = false
    const API_KEY = "AIzaSyAvh74W2C5t8swxn1hkEAQzThw8f_fV9hE"

    dispatch({ type: "FETCH_INIT" })
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=trending&key=${API_KEY}`
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
          dispatch({ type: "FETCH_SUCCESS", payload: data.items })
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
  return { loading, error, fonts }
}
