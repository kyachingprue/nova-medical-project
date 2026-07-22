import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { AiFillLike, AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { FaEye, FaUserMd } from 'react-icons/fa'
import { IoStopwatchOutline } from 'react-icons/io5'
import { Link, useParams } from 'react-router'

const BlogDetails = () => {
  const { id } = useParams();

const [blog, setBlog] = useState(null)

  useEffect(() => {
    fetch("/medical-blogs-30.json")
      .then((res) => res.json())
      .then((data) => {
        const singleBlog = data.find(
          (item) => item.id === Number(id)
        );

        setBlog(singleBlog);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    )
  }

  const {
    category,
    releaseDate,
    title,
    description,
    image,
    readTime,
    views,
    likes,
    comments,
    tags,
    author
  } = blog

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-5 py-12"
    >
      {/* Image */}

      <img
        src={image}
        alt={title}
        className="w-full h-70 md:h-112.5 rounded-2xl object-cover"
      />

      {/* Category */}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {category}
        </span>

        <div className="flex items-center gap-2 text-gray-500">
          <BsCalendarDate />
          {releaseDate}
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <IoStopwatchOutline />
          {readTime}
        </div>
      </div>

      {/* Title */}

      <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
        {title}
      </h1>

      {/* Author */}

      <div className="mt-8 border border-blue-400 rounded-2xl p-5 flex items-center gap-4 bg-slate-50">
        <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center">
          <FaUserMd className="text-white" size={30} />
        </div>

        <div>
          <h3 className="text-xl font-bold">{author.name}</h3>

          <p className="text-gray-600">{author.designation}</p>

          <p className="text-sm text-gray-500">
            Experience : {author.experience}
          </p>
        </div>
      </div>

      {/* Description */}

      <div className="mt-10 space-y-6 text-gray-700 leading-8 text-lg">
        <p>{description}</p>

        <p>
          Maintaining a healthy lifestyle can significantly improve both
          physical and mental well-being. Eating nutritious foods, exercising
          regularly, getting enough sleep, and practicing relaxation techniques
          are simple habits that support long-term health.
        </p>

        <p>
          Remember that every individual is different. If symptoms become
          persistent or interfere with daily life, seeking advice from a
          qualified healthcare professional is the safest and most effective
          approach.
        </p>
      </div>

      {/* Tags */}

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Tags</h3>

        <div className="flex flex-wrap gap-3">
          {tags.map(tag => (
            <span
              key={tag}
              className="bg-slate-100 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}

      <div className="mt-10 border-t border-blue-700 pt-8 flex flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <FaEye className="text-blue-600" />
          <span>{views} Views</span>
        </div>

        <div className="flex items-center gap-2">
          <AiFillLike className="text-pink-600" />
          <span>{likes} Likes</span>
        </div>

        <div className="flex items-center gap-2">
          💬
          <span>{comments} Comments</span>
        </div>
      </div>

      {/* Button */}

      <Link to="/all-blogs">
        <button className="mt-10 flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition">
          <AiOutlineArrowLeft />
          Back to Blogs
        </button>
      </Link>
    </motion.section>
  )
}

export default BlogDetails
