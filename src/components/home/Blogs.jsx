import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { GoArrowRight } from "react-icons/go";
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Link } from "react-router";
import Button from '@mui/material/Button'


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
              <Link to="/all-blogs">
                <Button
                  variant="contained"
                  className="bg-blue-600! hover:bg-blue-700! rounded-full! px-5! py-3! normal-case! font-bold! text-base! flex items-center gap-2"
                >
                  All Blog & Article
                  <GoArrowRight size={22} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {blogs.slice(0, 6).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
};

export default Blogs;
