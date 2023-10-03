import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayout/MainLayOut"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home/Home"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> }
        ]
    }
])

export default Route