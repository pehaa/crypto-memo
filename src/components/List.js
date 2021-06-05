import { useState } from "react"
import { useCurrencies } from "../hooks/useCurrencies"
import Currency from "./Currency"

const List = () => {
  const { error, loading, currencies } = useCurrencies()

  /*
  const [filter, setFilter] = useState("")
  */

  const [active, setActive] = useState(null)
  const displayedCurrencies = currencies.slice(0, 500)

  return (
    <div className="container p-4 py-5 px-lg-5">
      {loading ? (
        <p>loading... it can take a while...</p>
      ) : (
        <>
          {/*
          <div className="mb-3">
            <label htmlFor="filter" className="form-label">
              Filter currencies
            </label>
            <input
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control"
            />
          </div>
          */}
          <p>
            {displayedCurrencies.length} first results / {currencies.length}
          </p>
          {displayedCurrencies.map((el, index) => {
            return (
              <Currency
                key={el.id}
                currency={el}
                isActive={el.id === active}
                setActive={setActive}
              />
            )
          })}
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default List
