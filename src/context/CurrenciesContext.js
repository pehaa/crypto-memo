import { createContext, useContext, memo, useMemo } from "react"
import { useCurrencies } from "../hooks/useCurrencies"

export const CurrenciesContext = createContext()
export const CurrenciesContextProvider = memo(
  ({ children }) => {
    const { error, loading, currencies } = useCurrencies()
    const memoizedValue = useMemo(
      () => ({
        error,
        loading,
        currencies
      }),
      [error, loading, currencies]
    )
    return (
      <CurrenciesContext.Provider value={memoizedValue}>
        {children}
      </CurrenciesContext.Provider>
    )
  },
  (prev, next) => {
    console.log(next.children[0] === prev.children[0])
    console.log(prev.children)
    return true
  }
)

export const useCurrenciesContext = (id) => {
  const context = useContext(CurrenciesContext)
  if (context === "undefined") {
    throw new Error(
      "useActive should not be used outside the CurrenciesContextProvider"
    )
  }

  return context
}
