import { memo } from "react"
import FontBase from "./FontBase"
import FontDetails from "./FontDetails"

const Font = ({ font, isActive, setActive, index }) => {
  return isActive ? (
    <FontDetails font={font} />
  ) : (
    <FontBase font={font} index={index} setActive={setActive} />
  )
}

export default memo(Font)
