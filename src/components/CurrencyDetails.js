import React from "react"

const CurrencyDetails = ({ currency }) => {
  const { name, symbol, price, logo_url } = currency
  const price_change_pct = currency["1d"]?.price_change_pct
  const price_change_pct_30day = currency["30d"]?.price_change_pct
  return (
    <div className="shadow-sm p-2 mb-3">
      <h2 className="h6 d-flex aling-items-center justify-content-between">
        <span>{name}</span>
        <small>{symbol}</small>
      </h2>
      {logo_url && <img src={logo_url} alt={`${name} logo`} width="120" />}
      {price}
      {100 * price_change_pct}% {100 * price_change_pct_30day}%
    </div>
  )
}
export default CurrencyDetails
