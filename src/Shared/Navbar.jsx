import { Link, NavLink, useNavigate } from "react-router-dom"
import userDefProfile from '../assets/user.png'
import useGlobal from "../Hooks/useGlobal"

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useGlobal();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('Log-out successful.')
        navigate('/login')
      })
      .catch(() => {
        console.log('An error happened.')
      })
  }

  const navLinks = <>
    {
      user ?
        <>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/about'}>About</NavLink></li>
          <li><NavLink to={'/career'}>Career</NavLink></li>
        </>
        :
        <>
          <li><NavLink to={'/login'}>Login</NavLink></li>
          <li><NavLink to={'/register'}>Register</NavLink></li>
        </>
    }


  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mr-2">
            <img src={userDefProfile} />
          </div>
        </label>
        {
          user ?
            <div className="flex items-center gap-2">
              <p>{user.displayName}</p>
              <button onClick={handleLogOut} className="btn">LogOut</button>
            </div>
            :
            <Link to={'/login'} className="btn">Login</Link>
        }
      </div>
    </div>
  )
}

export default Navbar