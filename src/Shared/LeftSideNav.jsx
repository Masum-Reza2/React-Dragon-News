import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './leftnav.css'

const LeftSideNav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  console.log(categories)

  return (
    <div>
      <h1 className="font-bold">All Caterogy</h1>
      <div className="space-y-4 mt-5">
        {
          categories.map(category => {
            let { name, id } = category;
            return <div className="text-justify pl-12 text-lg" key={id}>
              <NavLink to={`category/${id}`}>{name}</NavLink>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default LeftSideNav