import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayout/MainLayOut"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ForgetPass from "../Pages/ForgetPassword/ForgetPass"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/forgetPassword', element: <ForgetPass /> }
        ]
    }
])

export default Route