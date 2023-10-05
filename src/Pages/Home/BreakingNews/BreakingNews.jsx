import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee gradient={true} pauseOnHover={true} speed={100}>
                <Link className="mr-12 hover:text-red-500" to={'#'}>Welcome to Dragon news...</Link>
                <Link className="mr-12 hover:text-red-500" to={'#'}>Can you ever hear the name of <strong className="text-indigo-500 underline">Masum Reza</strong></Link>
                <Link className="mr-12 hover:text-red-500" to={'#'}>Very soon he is going to be a appriciate developer..</Link>
            </Marquee>
        </div>
    )
}

export default BreakingNews