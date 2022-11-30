import React from "react"
import ReactDOM from "react-dom/client"
import Search from "./Search"
import "./index.scss"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
)
