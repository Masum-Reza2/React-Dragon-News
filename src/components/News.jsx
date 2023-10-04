import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const News = ({ news }) => {
    let { image_url, title, details, _id } = news;


    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
                    <img
                        className="mx-auto"
                        src={image_url}
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <span className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200)}
                                    <Link to={`/news/${_id}`} className="text-blue-600 font-bold ml-3">
                                        Read more...</Link>
                                </p>
                                :
                                details
                        }
                    </span>

                </div>
            </div>
        </div>
    )
}

export default News
News.propTypes = {
    news: PropTypes.object,
}