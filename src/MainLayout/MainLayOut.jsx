import { Outlet } from "react-router-dom"

const MainLayOut = () => {

  return (
    <div className="px-5">
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayOut