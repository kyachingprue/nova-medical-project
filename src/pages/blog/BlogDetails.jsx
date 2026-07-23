import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AiFillLike, AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { FaArrowRight, FaEye, FaNotesMedical, FaTags, FaUserMd } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoStopwatchOutline } from 'react-icons/io5'
import { MdLocalHospital } from 'react-icons/md'
import { Link, useParams } from 'react-router'


const blogFaqs = [
  {
    question: 'What are the early signs of depression?',
    answer:
      'Early signs of depression may include persistent sadness, loss of interest in daily activities, changes in sleep patterns, fatigue, difficulty concentrating, and feelings of hopelessness. If these symptoms continue for more than two weeks, consulting a healthcare professional is recommended.'
  },
  {
    question: 'How can I naturally reduce anxiety?',
    answer:
      'Regular exercise, deep breathing, mindfulness meditation, maintaining a healthy sleep schedule, limiting caffeine, and staying socially connected can help reduce anxiety naturally. Severe or persistent anxiety should be evaluated by a mental health specialist.'
  },
  {
    question: 'When should I seek professional mental health support?',
    answer:
      'You should seek professional support if emotional distress interferes with your daily life, relationships, work, or studies, or if symptoms become persistent and difficult to manage on your own.'
  },
  {
    question: 'Can stress affect my physical health?',
    answer:
      'Yes. Long-term stress may contribute to headaches, digestive issues, high blood pressure, weakened immunity, muscle tension, and sleep disorders. Managing stress is important for both mental and physical well-being.'
  },
  {
    question: 'What are the benefits of mindfulness practice?',
    answer:
      'Mindfulness can improve focus, reduce stress, enhance emotional regulation, promote better sleep, and increase overall well-being by helping you stay present in the current moment.'
  }
]

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null)
   const [openIndex, setOpenIndex] = useState(null)

   const toggleFAQ = index => {
     setOpenIndex(openIndex === index ? null : index)
   }

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
      className="md:max-w-5xl lg:max-w-7xl flex flex-col md:flex-row gap-6 mx-auto px-5 pt-8 pb-20"
    >
      <Helmet>
        <title>{blog.title} | MediCare Blog</title>

        <meta name="description" content={blog.description} />
      </Helmet>
      {/* Image */}

      <div className="flex-1 min-w-0">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-128 rounded-2xl object-cover"
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
            regularly, getting enough sleep, and practicing relaxation
            techniques are simple habits that support long-term health.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl my-16"
        >
          <span className="inline-block rounded-full bg-cyan-100 text-cyan-700 px-5 py-2 text-sm font-semibold">
            General Questions
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Frequently Asked
            <br />
            General Questions
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Find answers to the most common questions regarding mental wellness,
            anxiety, depression, mindfulness, healthy habits, and professional
            healthcare guidance.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mt-12 space-y-5">
          {blogFaqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ y: -2 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold text-slate-800">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-cyan-600 text-2xl"
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-slate-100 px-6 py-5">
                      <p className="leading-8 text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <Link to="/all-blogs">
          <button className="mt-10 flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition">
            <AiOutlineArrowLeft />
            Back to Blogs
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-[320px] xl:w-85 shrink-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
        >
          {/* Heading */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
                <MdLocalHospital className="text-2xl text-cyan-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Recent Blogs
                </h2>

                <p className="text-sm text-slate-500">Medical News & Tips</p>
              </div>
            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
              New
            </span>
          </div>

          {/* Blog List */}

          <div className="mt-6 space-y-4">
            {[
              'Breaking the Stigma Around Depression',
              '10 Effective Ways to Manage Anxiety Naturally',
              'Recognizing the Early Warning Signs of Depression',
              'Understanding Anxiety Disorders and Their Symptoms',
              'Daily Habits That Help Reduce Anxiety'
            ].map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.25 }}
                className="group cursor-pointer rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 transition group-hover:bg-cyan-600">
                    <FaNotesMedical className="text-cyan-600 transition group-hover:text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-cyan-700 md:text-base">
                      {blog}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Health • 5 min read
                      </span>

                      <FaArrowRight className="translate-x-0 text-cyan-600 transition duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}

          <Link to="/all-blogs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 w-full rounded-2xl bg-linear-to-r from-cyan-600 to-blue-600 py-3 font-semibold text-white shadow-lg transition"
            >
              View All Blogs
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
              <FaTags className="text-xl text-cyan-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">Categories</h2>

              <p className="text-sm text-slate-500">Browse by Topic</p>
            </div>
          </div>

          {/* Category Buttons */}

          <div className="mt-6 flex flex-col gap-4">
            {[
              'Depression',
              'Anxiety',
              'Wellness',
              'Mindfulness',
              'Relaxation',
              'Stress',
              'Management'
            ].map((category, index) => (
              <motion.button
                key={index}
                whileHover={{
                  x: 5,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center justify-between rounded-2xl border border-cyan-100 bg-linear-to-r from-cyan-50 to-sky-50 px-5 py-4 text-left shadow-sm transition-all duration-300 hover:border-cyan-300 hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:shadow-lg"
              >
                <span className="font-semibold">{category}</span>

                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </motion.button>
            ))}
          </div>

          {/* Footer */}

          <div className="mt-6 rounded-2xl bg-cyan-50 p-4 text-center">
            <p className="text-sm text-slate-600">
              📚 Explore articles, tips, and expert advice by category.
            </p>
          </div>
        </motion.div>
        {/* Advertisement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5 }}
          className="mt-6 overflow-hidden rounded-4xl bg-white shadow-2xl"
        >
          {/* Hero */}
          <div className="relative h-72">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/70 to-transparent" />

            {/* Discount Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5
              }}
              className="absolute top-5 right-5 h-24 w-24 rounded-[28px] bg-linear-to-br from-yellow-300 to-orange-500 text-slate-900 shadow-xl flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-black">40%</span>
              <span className="text-xs font-semibold uppercase">OFF</span>
            </motion.div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold text-white">
                Limited Campaign
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Premium Health Package
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-200">
                Annual medical checkup with specialist consultation, laboratory
                tests, and personalized wellness advice.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="bg-linear-to-r from-cyan-600 to-blue-700 p-6 text-white">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                ✅ Free Doctor Consultation
              </div>

              <div className="flex items-center gap-3">
                📄 Digital Health Report
              </div>

              <div className="flex items-center gap-3">
                🏥 Priority Appointment
              </div>
            </div>

            <motion.button
              whileHover={{
                scale: 1.03
              }}
              whileTap={{
                scale: 0.97
              }}
              className="mt-6 w-full rounded-2xl bg-white py-3 font-bold text-cyan-700 transition"
            >
              Claim Your Offer
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BlogDetails
