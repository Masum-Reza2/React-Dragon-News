import { FaFacebookF, FaGithubSquare, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <>
      <div className="space-y-2 px-3 mb-10">
        <h1 className="text-2xl ">Login with</h1>
        <div className='py-3 space-y-3'>
          <div className=" space-x-2">
            <button className="btn bg-transparent outline outline-blue-300 btn-sm w-full">
              <FaGoogle className='text-xl text-blue-400' />
              Login with Google
            </button>
          </div>
          <div className=" space-x-2">
            <button className="btn bg-transparent outline btn-sm w-full">
              <FaGithubSquare className='text-xl' />
              Login with Github
            </button>
          </div>
        </div>
      </div>

      <div className=" px-3">
        <h1 className="text-2xl ">Find us on</h1>
        <div className='py-3'>
          <div className=" space-x-2 border w-full rounded-t-lg">
            <a href='#' className="flex items-center gap-2 py-4 cursor-pointer">
              <FaFacebookF className='text-2xl text-blue-400 ml-4 bg-gray-300 rounded-full' />
              Facebook
            </a>
          </div>
          <div className=" space-x-2 border-x w-full">
            <a href='#' className="flex items-center gap-2 py-4 cursor-pointer">
              <FaTwitter className='text-2xl ml-4 bg-gray-300 rounded-full ' />
              Twitter
            </a>
          </div>
          <div className=" space-x-2 border w-full rounded-b-lg">
            <a href='#' className="flex items-center gap-2 py-4 cursor-pointer">
              <FaInstagram className='text-2xl ml-4 bg-gray-300 rounded-full ' />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Qzone */}
      <div className='my-5 px-3'>
        <div className='bg-gray-200 rounded-lg'>
          <h1 className='font-semibold'>Qzone</h1>
          <div className='space-y-3'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSideNav