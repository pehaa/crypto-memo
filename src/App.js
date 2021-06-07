import { useState } from "react"
import List from "./components/List"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={` min-vh-100 ${darkMode ? "bg-dark text-light" : ""}`}>
      <button
        type="button"
        className="btn btn-warning fixed-top"
        onClick={() => setDarkMode(!darkMode)}
      >
        change
      </button>
      <header className="App-header text-center bg-dark text-white p-5">
        <h1>
          Crypto Currencies with{" "}
          <a className="text-reset" href="https://nomics.com/docs/">
            nomics API
          </a>
        </h1>
      </header>
      <List />
    </div>
  )
}

export default App
