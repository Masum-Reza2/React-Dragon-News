import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee gradient={true} pauseOnHover={true} speed={100}>
                <Link className="mr-12 hover:text-red-500" to={'#'}>I can be a React component, multiple...</Link>
                <Link className="mr-12 hover:text-red-500" to={'#'}>I can be a React component, multiple...</Link>
                <Link className="mr-12 hover:text-red-500" to={'#'}>I can be a React component, multiple...</Link>
            </Marquee>
        </div>
    )
}

export default BreakingNews