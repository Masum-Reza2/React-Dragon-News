import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="space-y-2 text-center">
                <strong className="text-red-500 text-2xl">Oops something wrong</strong>
                <p>{error.statusText || error.message}</p>
                <div className="text-center">
                    <Link to={'/'}>
                        <button className="px-3 py-1 border shadow-md shadow-gray-400 rounded-sm hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Goto Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage