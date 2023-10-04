import { useParams } from "react-router-dom"
import Header from "../Shared/Header"
import Navbar from "../Shared/Navbar"
import RightSideNav from "../Shared/RightSideNav"

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    details here {id}
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default NewsDetails