import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router.jsx"
import { Provider } from "react-redux"
import "./index.css"
import store from "./Component/Redux/store.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
  </React.StrictMode>
)
