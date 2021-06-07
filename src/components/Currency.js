const Currency = ({ currency, isActive, setActive }) => {
  const { id, name, symbol, logo_url, ...rest } = currency
  return (
    <div className="shadow-sm p-2 mb-3">
      <div className="d-flex align-items-center">
        {logo_url && (
          <img
            src={logo_url}
            alt={`${name} logo`}
            width="32"
            className="me-3"
          />
        )}
        <h2 className="h5 mb-0">
          <span>{name}</span> (<small>{symbol}</small>)
        </h2>
        {isActive ? (
          <button
            type="button"
            className="d-flex ms-auto btn btn-sm btn-dark"
            onClick={() => setActive(null)}
          >
            Hide details
          </button>
        ) : (
          <button
            type="button"
            className="d-flex ms-auto btn btn-sm btn-dark"
            onClick={() => setActive(id)}
          >
            Show details
          </button>
        )}
      </div>
      {isActive && <pre className="mt-4">{JSON.stringify(rest, null, 2)}</pre>}
    </div>
  )
}

export default Currency
