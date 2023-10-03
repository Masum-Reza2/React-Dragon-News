import { Outlet } from "react-router-dom"

const MainLayOut = () => {


  return (
    <div>
      header here
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      footer here
    </div>
  )
}

export default MainLayOut