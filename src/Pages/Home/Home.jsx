import { useLoaderData } from "react-router-dom"
import Header from "../../Shared/Header"
import LeftSideNav from "../../Shared/LeftSideNav"
import Navbar from "../../Shared/Navbar"
import RightSideNav from "../../Shared/RightSideNav"
import BreakingNews from "./BreakingNews/BreakingNews"
import News from "../../components/News"

const Home = () => {

    const allNews = useLoaderData();
    // console.log(allNews)

    return (
        <div>
            <Header />
            <div>
                <BreakingNews />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
                <div>
                    <LeftSideNav />
                </div>

                {/* News container */}
                <div className="md:col-span-2  space-y-14">
                    {
                        allNews.map(news => <News key={news._id} news={news} />)
                    }
                </div>

                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default Home