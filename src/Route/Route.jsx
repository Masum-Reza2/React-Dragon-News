import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayout/MainLayOut"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ForgetPass from "../Pages/ForgetPassword/ForgetPass"
import About from "../Pages/About/About"
import Career from "../Pages/Career/Career"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import NewsDetails from "../components/NewsDetails"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            // private routes
            { path: '/', loader: () => fetch('/news.json'), element: <PrivateRoute><Home /></PrivateRoute> },
            { path: '/about', element: <PrivateRoute><About /></PrivateRoute> },
            { path: '/career', element: <PrivateRoute><Career /></PrivateRoute> },
            { path: '/news/:id', loader: () => fetch('/news.json'), element: <PrivateRoute><NewsDetails /></PrivateRoute> },

            // open routes
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/forgetPassword', element: <ForgetPass /> },
        ]
    }
])

export default Route