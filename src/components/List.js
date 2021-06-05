import { useState, useMemo } from "react"
import { useCurrencies } from "../hooks/useCurrencies"

import { matchSorter } from "match-sorter"
import Currency from "./Currency"

const getItems = (items, filter) => {
  console.log("run get Items")
  return filter
    ? matchSorter(items, filter, { keys: ["name", "symbol"] })
    : items
}

const List = () => {
  const { error, loading, currencies } = useCurrencies()
  const [filter, setFilter] = useState("")
  const [, setForce] = useState(false)

  const displayCurrencies = useMemo(() => {
    const filteredCurrencies = getItems(currencies, filter)
    console.log(filteredCurrencies.length)
    return filteredCurrencies.slice(0, 500)
  }, [filter, currencies])
  console.log(displayCurrencies)
  const [active, setActive] = useState(0)

  return (
    <div className="container p-4">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <button onClick={() => setForce((f) => !f)}>Force reload</button>
          <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          {displayCurrencies.map((el, index) => {
            return (
              <Currency
                key={el.id}
                currency={el}
                isActive={index === active}
                index={index}
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
