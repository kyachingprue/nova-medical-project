import axios from 'axios'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import BlogCard from '../../components/BlogCard'
import { Helmet } from 'react-helmet-async'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/medical-blogs-30.json')
        setBlogs(res.data)
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-6/12 mx-auto justify-center items-center p-64 ">
        <Box>
          <CircularProgress aria-label="Loading…" />
        </Box>
      </div>
    )
  }
  return (
    <main className="bg-gray-200">
      <Helmet>
        <title>Our Blogs | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-10">
        <section>
          <div className="w-full px-5 md:px-0 md:max-w-6xl mx-auto text-center mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
              Medical Insights & Blogs
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Expert Health Tips &
              <span className="text-cyan-600"> Medical Articles</span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8 text-base md:text-lg">
              Stay informed with expert-written medical articles, wellness
              guides, preventive healthcare tips, and the latest health news.
              Our blog helps patients make informed decisions by providing
              reliable, easy-to-understand, and evidence-based medical
              information for a healthier lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                📚 Expert Medical Articles
              </div>

              <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                💙 Wellness & Lifestyle Tips
              </div>

              <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                🩺 Disease Prevention Guides
              </div>

              <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                🌿 Healthy Living Advice
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default AllBlogs
