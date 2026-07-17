import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { GoArrowRight } from "react-icons/go";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    try {
      const fetchBlogs = async () => {
        const res = await axios.get("/medical-blogs-30.json")
        setBlogs(res.data);
      }
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  },[])
  return (
    <main className="bg-gray-200">
      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-24">
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div>
              <p className="text-xl font-bold text-blue-700">NEWSLETTER</p>
              <h3 className="text-5xl font-bold text-black pt-4 pb-8">
                Read Our Latest Blog & <br /> Article
              </h3>
            </div>
            <div>
              <button className="text-white flex items-center gap-2 text-lg font-bold bg-blue-700 py-3 px-5 rounded-full">
                All Blog & Article <GoArrowRight size={29}/>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {blogs.slice(0, 9).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
};

export default Blogs;
