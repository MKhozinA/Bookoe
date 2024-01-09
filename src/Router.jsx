import { createBrowserRouter } from "react-router-dom"
import All from "./Pages/allpages"
import BookDetail from "./Pages/bookdetail"
import Search from "./Pages/search"
import NotFound from "./Pages/notfound"
import TopPicks from "./Pages/toppicks"
import Latest from "./Pages/latest"
import Eror from "./Component/404"
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: All },
      { path: "book/:id", Component: BookDetail },
      { path: "search", Component: Search },
      { path: "notfound", Component: NotFound },
      { path: "top-pics", Component: TopPicks },
      { path: "latest", Component: Latest },
    ],

  },

  {
    path: "",
    children: [
      { path: "*", Component: Eror },
      { path: "/", Component: All },
    ],
  },
])

export { router }
