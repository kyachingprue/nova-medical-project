import axios from 'axios'
import { useEffect, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import BlogCard from '../../components/BlogCard'

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
      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-24">
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div>
              <p className="text-xl font-bold text-blue-700">NEWS LETTER</p>
              <h3 className="text-5xl font-bold text-black pt-4 pb-8">
                Read Our Latest Blog & <br /> Article
              </h3>
            </div>
            <div>
              <button className="text-white flex items-center gap-2 text-lg font-bold bg-blue-700 py-3 px-5 rounded-full">
                All Blog & Article <GoArrowRight size={29} />
              </button>
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
