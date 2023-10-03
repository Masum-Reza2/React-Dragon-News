import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayout/MainLayOut"

const Route = createBrowserRouter([
    { path: '/', element: <MainLayOut /> }
])

export default Route