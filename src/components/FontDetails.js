import React from "react"
import GoogleFontLoader from "react-google-font-loader"

const FontDetails = ({ font }) => {
  const { family, variants, category } = font
  return (
    <div className="shadow-sm p-2 mb-3">
      <GoogleFontLoader fonts={[{ font: family }]} subsets={["latin"]} />
      <h2 className="h6 d-flex aling-items-center justify-content-between">
        <span>{family}</span>
        <small>{variants.length} variant(s)</small>
      </h2>
      <p>
        <span className="badge bg-dark">{category.toUpperCase()}</span>
      </p>
      <p style={{ fontFamily: family }}>
        Portez ce vieux whisky au juge blond qui fume !? 0123456789
      </p>
    </div>
  )
}
export default FontDetails
