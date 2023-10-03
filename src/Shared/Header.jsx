import logo from '../assets/logo.png'
import moment from 'moment'

let currentDate = moment().format("dddd, MMMM D, YYYY")

const Header = () => {
  return (
    <div className='flex flex-col items-center gap-2 justify-center pt-2 px-2'>
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className='font-semibold'>{currentDate}</p>
    </div>
  )
}


export default Header