import { useEffect, useState } from "react"
import './leftnav.css'

const LeftSideNav = ({ setDisplayNews, allNews }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  // console.log(categories)
  // const categoryNews = allNews.filter(targetNews => allNews.===categories.name)
  // console.log(categories)
  // console.log(allNews)

  return (
    <div>
      <h1 className="font-bold">All Caterogy</h1>
      <div className="space-y-4 mt-5">
        {
          categories.map(category => {
            let { name, id } = category;
            return <div className="text-justify pl-12 text-lg" key={id}>
              <button className="btn focus:underline focus:bg-red-500 focus:text-white">{name}</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default LeftSideNav