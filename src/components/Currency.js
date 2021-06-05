import { memo } from "react"
import CurrencyBase from "./CurrencyBase"
import CurrencyDetails from "./CurrencyDetails"

const Currency = ({ index, currency, isActive, setActive }) => {
  return isActive ? (
    <>
      {index}
      <CurrencyDetails currency={currency} />
    </>
  ) : (
    <>
      {index}
      <CurrencyBase currency={currency} index={index} setActive={setActive} />
    </>
  )
}

export default memo(Currency)
