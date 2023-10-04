import { Navigate, useLocation } from "react-router-dom";
import useGlobal from "../Hooks/useGlobal"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useGlobal();
    const {pathname} = useLocation()
    // console.log(pathname)

    if (loading) {
        return <div className="h-screen flex items-center justify-center">
            <h1 className="text-center font-bold text-2xl">Loading...</h1>
        </div>
    }
    return user ? children : <Navigate state={pathname} to={'/login'}></Navigate>
}

export default PrivateRoute