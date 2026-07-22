import { AiFillLike } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { FaArrowRight, FaEye } from 'react-icons/fa'
import { IoStopwatchOutline } from 'react-icons/io5'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const BlogCard = ({ blog }) => {
  const {
    id,
    category,
    releaseDate,
    title,
    description,
    image,
    readTime,
    views,
    likes
  } = blog

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group w-full md:w-96 lg:w-102.5 mx-auto h-full overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-cyan-200/50 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-72 md:h-80 object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Category */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="absolute top-4 left-4"
        >
          <span className="rounded-full bg-cyan-600/95 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-lg">
            {category}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date + Read Time */}
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <BsCalendarDate className="text-cyan-600" />
            <span>{releaseDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <IoStopwatchOutline className="text-cyan-600" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}

        <Link to="/">
          <motion.h3
            whileHover={{ x: 5 }}
            className="mt-5 text-2xl font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-blue-600 group-hover:underline"
          >
            {title}
          </motion.h3>
        </Link>

        {/* Description */}

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          {description.slice(0, 170)}...
        </p>

        {/* Bottom */}

        <div className="mt-6 flex items-center justify-between">
          {/* Views */}

          <div className="flex items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2"
            >
              <FaEye className="text-blue-600" />

              <span className="font-medium text-slate-700">{views}</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.12 }}
              className="flex items-center gap-2 rounded-full bg-pink-50 px-3 py-2"
            >
              <AiFillLike className="text-pink-500" />

              <span className="font-medium text-slate-700">{likes}</span>
            </motion.div>
          </div>

          {/* Button */}

          <Link to={`/blog-details/${id}`}>
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Read More
              <FaArrowRight className="text-xs" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

export default BlogCard
