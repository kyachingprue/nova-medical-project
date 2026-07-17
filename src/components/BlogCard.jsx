import { AiFillLike } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoStopwatchOutline } from "react-icons/io5";
import { Link } from "react-router";


const BlogCard = ({ blog }) => {
  const { category, releaseDate, title, description, image, readTime, views, likes } = blog;
  return (
    <section className="w-full md:w-96 lg:w-100 h-full mx-2 md:mx-4 bg-white rounded-md hover:shadow-2xl transition duration-300">
      <div className="relative">
        <img
          className="relative w-full h-75 rounded-t-md object-cover"
          src={image}
          alt="Blog image"
        />
        <div className="absolute top-2 left-2">
          <p className="text-white bg-cyan-800 rounded-md py-2.5 px-3">
            {category}
          </p>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center pt-4">
          <div className="flex gap-2 items-center">
            <BsCalendarDate />
            <p className="text-gray-600 text-sm md:text-base">{releaseDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoStopwatchOutline />
            <p className="text-gray-600 text-sm md:text-base">{readTime}</p>
          </div>
        </div>
        <Link to="/">
          <h3 className="text-black text-xl font-bold hover:text-blue-600 hover:underline py-3">
            {title}
          </h3>
        </Link>
        <p className="pb-3">{description.slice(0, 300)}...</p>
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center gap-2">
            <FaEye size={20} />
            <p className="text-gray-700 text-sm md:text-base">{views}</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillLike size={20} />
            <p className="text-gray-700 text-sm md:text-base">{likes}</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BlogCard;
