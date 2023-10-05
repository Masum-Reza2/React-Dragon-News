import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../Shared/Navbar"
import useGlobal from "../../Hooks/useGlobal"
import swal from 'sweetalert';

const Register = () => {
    const { createUser, profileUpdate, sendVerificationLink } = useGlobal()
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
                setTimeout(() => {
                    swal('Hey', 'Account created succesfully', 'success')
                }, 1000);
                // updating profile
                profileUpdate(name, photo)
                    .then(() => {
                        setTimeout(() => {
                            swal(`Welcome ${user.displayName || 'Mr. x'}!`);
                        }, 3000);
                    })
                    .catch((error) => {
                        swal('Oops', error.message, 'error')
                    })

                // sending verification link
                sendVerificationLink()
                    .then(() => {
                        setTimeout(() => {
                            swal('Done', `verification link sent to ${user?.email || 'your email address'}`, 'success')
                        }, 5000);
                        // navigating to login page
                        return navigate('/login')
                    })
            })
            .catch(error => {
                swal('Oops', error.message, 'error')
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