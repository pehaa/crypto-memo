const CurrencyBase = ({ currency, setActive, index }) => {
  const { name, symbol } = currency
  return (
    <div className="shadow-sm d-flex justify-content-between mb-3 p-2">
      <h2 className="h6">
        {name} ({symbol})
      </h2>
      <button
        className="d-flex ms-auto btn btn-sm btn-dark"
        onClick={() => setActive(index)}
      >
        Show details
      </button>
    </div>
  )
}

export default CurrencyBase
