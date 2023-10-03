import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayout/MainLayOut"
import ErrorPage from "../Pages/ErrorPage"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {}
        ]
    }
])

export default Route