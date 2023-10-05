import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import useGlobal from "../../Hooks/useGlobal";
import swal from 'sweetalert';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    // console.log(location)
    const { loginUser } = useGlobal();

    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password)

        // Another way to get formData
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.password)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result?.user?.emailVerified) {
                    swal('Hurray', 'Successfully logged in', 'success')
                    return navigate(location?.state || '/')
                }
                else {
                    return swal('Oops', "Please verify your email!", 'error');
                }

            })
            .catch(error => {
                return swal('Oops', error.message, 'error')
            })
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-[88vh] flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold text-2xl">Please Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link to={'/forgetPassword'} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <p className="mt-5">Don't have an account? please <Link className="btn btn-sm text-blue-500" to={'/register'}>register</Link></p>
            </div>
        </div>
    )
}

export default Login