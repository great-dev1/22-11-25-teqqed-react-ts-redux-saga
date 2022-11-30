import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import Search from "./pages/search"
import "./index.scss"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Search />
    </Provider>
  </React.StrictMode>
)
