import { useState, useMemo } from "react"
import { useFonts } from "../hooks/useFonts"
import Font from "./Font"
import { matchSorter } from "match-sorter"

const List = () => {
  const { error, loading, fonts } = useFonts()
  const [active, setActive] = useState(0)
  const [filter, setFilter] = useState("")
  const filteredFonts = useMemo(() => {
    const start = window.performance.now()
    console.log(filter)
    const result = !filter
      ? fonts
      : matchSorter(fonts, filter, {
          keys: ["family"]
        })
    const end = window.performance.now()
    console.log(end - start)
    return result
  }, [fonts, filter])
  return (
    <div className="container p-4">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filteredFonts.map((el, index) => {
            return (
              <Font
                key={el.family}
                font={el}
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
