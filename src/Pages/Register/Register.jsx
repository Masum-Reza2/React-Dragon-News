import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../Shared/Navbar"
import useGlobal from "../../Hooks/useGlobal"

const Register = () => {
    const { createUser, profileUpdate } = useGlobal()
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password)

        // Another way to get formData
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.password)

        // formik way
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password)

        // creating user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);

                // updating profile
                profileUpdate(name, photo)
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(() => {
                        console.log('profile update get some error')
                    })

                // sending verification code


                // navigating to login page
                navigate('/login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div>
                <Navbar />
                <div className="min-h-[88vh] flex flex-col items-center justify-center py-5">
                    <h1 className="text-center font-semibold text-2xl">Please Register</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

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
                                <input type="password" name="password" placeholder="Create Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-5">Already have an account? please <Link className="btn btn-sm text-blue-500" to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register