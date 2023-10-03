import Header from "../../Shared/Header"
import LeftSideNav from "../../Shared/LeftSideNav"
import Navbar from "../../Shared/Navbar"
import RightSideNav from "../../Shared/RightSideNav"
import BreakingNews from "./BreakingNews/BreakingNews"

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <BreakingNews />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border border-black">
                    <LeftSideNav />
                </div>
                <div className="border border-black md:col-span-2">
                    News coming soon...
                </div>
                <div className="border border-black">
                    <RightSideNav />
                </div>
            </div>
        </>
    )
}

export default Home