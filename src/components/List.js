import { useState } from "react"
import { useFonts } from "../hooks/useFonts"
import Font from "./Font"

const List = () => {
  const { error, loading, fonts } = useFonts()
  const [active, setActive] = useState(0)
  return (
    <div className="container p-4">
      {loading ? (
        <p>loading...</p>
      ) : (
        fonts.map((el, index) => {
          return (
            <Font
              key={el.family}
              font={el}
              isActive={index === active}
              index={index}
              setActive={setActive}
            />
          )
        })
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default List
