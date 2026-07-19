import { NavLink, Link, useLocation } from "react-router";
import Button from '@mui/material/Button'
import { useEffect, useRef, useState } from "react";


const Navbar = () => {
 const [openDropdown, setOpenDropdown] = useState(null)

const aboutRef = useRef(null)
const serviceRef = useRef(null)
const blogRef = useRef(null)
const pageRef = useRef(null)

 const location = useLocation()

 const serviceRoutes = ['/our-services', '/appointment', '/doctors', '/departments', '/emergency-care']
 const blogRoutes = ['/all-blogs', '/blog-category', '/blog-details']
 const aboutRoutes = ['/about-us', '/our-team', '/faq']
 const pageRoutes = ['/pricing', '/testimonials', '/gallery', '/404']

 const pageActive = pageRoutes.includes(location.pathname)
 const aboutActive = aboutRoutes.includes(location.pathname)
 const serviceActive = serviceRoutes.includes(location.pathname)
 const blogActive = blogRoutes.includes(location.pathname)

 // Close when clicking outside
useEffect(() => {
  const handleClickOutside = e => {
    if (
      !aboutRef.current?.contains(e.target) &&
      !serviceRef.current?.contains(e.target) &&
      !blogRef.current?.contains(e.target) &&
      !pageRef.current?.contains(e.target)
    ) {
      setOpenDropdown(null)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  return () => document.removeEventListener('mousedown', handleClickOutside)
}, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-gray-50">
      <section className="flex justify-between items-center max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-4 text-black">
        <div>
          <Link to="/">
            <button className="active:scale-95 cursor-pointer text-3xl font-medium ">
              NovaDev
            </button>
          </Link>
        </div>
        <ul className="flex gap-10 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="relative" ref={aboutRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'about' ? null : 'about')
              }
              className={`flex items-center gap-2 transition-colors ${
                aboutActive
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About
              <span>{openDropdown === 'about' ? '▲' : '▼'}</span>
            </button>

            {openDropdown === 'about' && (
              <div className="absolute top-10 left-0 w-56 rounded-lg border border-blue-300 bg-white shadow-lg overflow-hidden">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/our-team"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Our Team
                </NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  FAQ
                </NavLink>
              </div>
            )}
          </li>
          <li className="relative" ref={serviceRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'service' ? null : 'service')
              }
              className={`flex items-center gap-2 transition-colors ${
                serviceActive
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Services
              <span>{openDropdown === 'service' ? '▲' : '▼'}</span>
            </button>

            {openDropdown === 'service' && (
              <div className="absolute top-10 left-0 w-56 rounded-lg border border-blue-300 bg-white shadow-lg overflow-hidden">
                <NavLink
                  to="/our-services"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                    }`
                  }
                >
                  Our Services
                </NavLink>

                <NavLink
                  to="/appointment"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                    }`
                  }
                >
                  Appointment
                </NavLink>

                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                    }`
                  }
                >
                  Doctors
                </NavLink>

                <NavLink
                  to="/departments"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                    }`
                  }
                >
                  Departments
                </NavLink>
                <NavLink
                  to="/emergency-care"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                    }`
                  }
                >
                  Emergency Care
                </NavLink>
              </div>
            )}
          </li>
          <li className="relative" ref={blogRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'blog' ? null : 'blog')
              }
              className={`flex items-center gap-2 transition-colors ${
                blogActive
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Blogs
              <span>{openDropdown === 'blog' ? '▲' : '▼'}</span>
            </button>

            {openDropdown === 'blog' && (
              <div className="absolute top-10 left-0 w-56 rounded-lg border border-blue-300 bg-white shadow-lg overflow-hidden">
                <NavLink
                  to="/all-blogs"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  All Blogs
                </NavLink>

                <NavLink
                  to="/blog-category"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Blog Category
                </NavLink>

                <NavLink
                  to="/blog-details"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Blog Details
                </NavLink>
              </div>
            )}
          </li>
          <li className="relative" ref={pageRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'page' ? null : 'page')
              }
              className={`flex items-center gap-2 transition-colors ${
                pageActive
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Pages
              <span>{openDropdown === 'page' ? '▲' : '▼'}</span>
            </button>

            {openDropdown === 'page' && (
              <div className="absolute top-10 left-0 w-56 rounded-lg border bg-white shadow-lg overflow-hidden">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Pricing
                </NavLink>

                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Testimonials
                </NavLink>

                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  Gallery
                </NavLink>

                <NavLink
                  to="/404"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                    }`
                  }
                >
                  404
                </NavLink>
              </div>
            )}
          </li>
        </ul>

        <div>
          <Button variant="contained">Contact Us</Button>
        </div>
      </section>
    </nav>
  )
};

export default Navbar;
