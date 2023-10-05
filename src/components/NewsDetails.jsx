import { useLoaderData, useParams } from "react-router-dom"
import Header from "../Shared/Header"
import Navbar from "../Shared/Navbar"
import RightSideNav from "../Shared/RightSideNav"
import { useEffect, useState } from "react"
import { AiFillEye } from 'react-icons/ai';
import Rating from "react-rating"

const NewsDetails = () => {
    const { id } = useParams();
    const allNews = useLoaderData()
    // console.log(allNews, id)
    const [targetNews, setTargetNews] = useState({})
    const { details, rating, title, total_view, image_url } = targetNews;

    useEffect(() => {
        const requiredNews = allNews.find(news => news._id === id)
        setTargetNews(requiredNews);
    }, [])

    console.log(parseFloat(rating?.number).toFixed(0))

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 ">
                    <div className="border shadow-md shadow-gray-500 p-5 space-y-2 rounded-md">
                        <img className="mx-auto rounded-md" src={image_url} alt="" />
                        <h1 className="text-center font-semibold underline">{title}</h1>
                        <p>{details}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center">
                                <Rating start={0} stop={5} initialRating={0} placeholderRating={rating?.number} />
                            </div>
                            <p className="flex items-center gap-1"><AiFillEye className="text-2xl" /> {total_view}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default NewsDetails