import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import useGlobal from "../../Hooks/useGlobal";
import swal from "sweetalert";

const ForgetPass = () => {
    const { resetUserPassword } = useGlobal()

    const handleForget = e => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email)

        resetUserPassword(email)
            .then(() => {
                swal('Done', `${email} 'Check inbox'`, 'success')
            })
            .catch((error) => {
                swal('Oops', error.message, 'error')
            })

        // Another way to get formData
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.password)
        // const form = new FormData(e.currentTarget)
        // console.log(form.get('email'))
        // console.log(form.get('password'))
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-[88vh] flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold text-2xl">Don't Worry</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form className="card-body" onSubmit={handleForget}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Get Code</button>
                        </div>
                    </form>
                </div>
                <p className="mt-5">Remembered password? please <Link className="btn btn-sm text-blue-500" to={'/login'}>login</Link></p>
            </div>
        </div>
    )
}

export default ForgetPass