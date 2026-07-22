import { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhoneCall,
  FiCalendar,
} from "react-icons/fi";

import { FaHeartbeat } from "react-icons/fa";

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    children: [
      {
        name: 'About Us',
        path: '/about-us'
      },
      {
        name: 'Our Team',
        path: '/our-team'
      },
      {
        name: 'FAQ',
        path: '/faq'
      }
    ]
  },
  {
    title: 'Services',
    children: [
      {
        name: 'Our Services',
        path: '/services/our-services'
      },
      {
        name: 'Appointments',
        path: '/services/appointments'
      },
      {
        name: 'Emergency Care',
        path: '/services/emergency-care'
      },
      {
        name: 'Testimonials',
        path: '/services/testimonials'
      },
      {
        name: 'Pricing',
        path: '/services/pricing'
      },
      {
        name: 'Gallery',
        path: '/services/gallery'
      },
      {
        name: '404',
        path: '/services/not-found'
      }
    ]
  },
  {
    title: 'Doctors',
    children: [
      {
        name: 'All Doctors',
        path: '/doctors'
      },
      {
        name: 'Departments',
        path: '/departments'
      },
      {
        name: 'Book Appointment',
        path: '/book-appoinment'
      }
    ]
  },
  {
    title: 'Contact',
    path: '/contact-us'
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.5
      }}
      className="sticky top-0 z-50 border-b border-cyan-100 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg">
              <FaHeartbeat size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold leading-none text-slate-900">
                Nova
              </h2>

              <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-600">
                Medicare
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map(item => {
            const hasDropdown = item.children

            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() =>
                  hasDropdown && setActiveDropdown(item.title)
                }
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                {/* Normal Link */}
                {!hasDropdown ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-600 text-white shadow-lg'
                          : 'text-slate-700 hover:bg-cyan-50 hover:text-cyan-600'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <>
                    {/* Dropdown Button */}
                    <motion.button
                      whileHover={{
                        y: -2
                      }}
                      className="flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600"
                    >
                      {item.title}

                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.title ? 180 : 0
                        }}
                        transition={{
                          duration: 0.25
                        }}
                      >
                        <FiChevronDown size={18} />
                      </motion.div>
                    </motion.button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 15
                          }}
                          animate={{
                            opacity: 1,
                            y: 0
                          }}
                          exit={{
                            opacity: 0,
                            y: 15
                          }}
                          transition={{
                            duration: 0.2
                          }}
                          className="absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-2xl"
                        >
                          <div className="py-3">
                            {item.children.map((child, index) => (
                              <motion.div
                                key={child.path}
                                initial={{
                                  opacity: 0,
                                  x: -15
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0
                                }}
                                transition={{
                                  delay: index * 0.05,
                                  duration: 0.25
                                }}
                              >
                                <NavLink
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `group mx-3 flex items-center justify-between rounded-xl px-5 py-3 transition-all duration-300 ${
                                      isActive
                                        ? 'bg-cyan-600 text-white shadow-md'
                                        : 'text-slate-700 hover:bg-cyan-50 hover:text-cyan-600'
                                    }`
                                  }
                                >
                                  <span className="font-medium">
                                    {child.name}
                                  </span>

                                  <motion.span
                                    initial={{
                                      x: -5,
                                      opacity: 0
                                    }}
                                    whileHover={{
                                      x: 0,
                                      opacity: 1
                                    }}
                                    transition={{
                                      duration: 0.2
                                    }}
                                    className="opacity-0 group-hover:opacity-100"
                                  >
                                    →
                                  </motion.span>
                                </NavLink>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            )
          })}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Emergency Button */}
          <motion.a
            href="tel:+880123456789"
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.95
            }}
            className="flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 font-medium text-cyan-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-100"
          >
            <FiPhoneCall size={18} />
            <div className="flex flex-col leading-none">
              <span className="text-xs text-slate-500">Emergency</span>
              <span className="font-semibold">+880 1234 567890</span>
            </div>
          </motion.a>

          {/* Appointment Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.95
            }}
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-sky-700 hover:shadow-cyan-300"
          >
            <FiCalendar size={18} />
            Book Appointment
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{
            scale: 0.9
          }}
          whileHover={{
            rotate: 5
          }}
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200 bg-white text-cyan-700 shadow-sm transition-all duration-300 hover:bg-cyan-50 lg:hidden"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0
                }}
                animate={{
                  rotate: 0,
                  opacity: 1
                }}
                exit={{
                  rotate: 90,
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}
              >
                <FiX size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0
                }}
                animate={{
                  rotate: 0,
                  opacity: 1
                }}
                exit={{
                  rotate: -90,
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}
              >
                <FiMenu size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.35
            }}
            className="border-t border-cyan-100 bg-white lg:hidden"
          >
            <div className="space-y-2 px-5 py-6">
              {navLinks.map(item => {
                const hasDropdown = item.children

                return (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-slate-100"
                  >
                    {/* Normal Link */}
                    {!hasDropdown ? (
                      <NavLink
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-4 font-semibold transition-all duration-300 ${
                            isActive
                              ? 'bg-cyan-600 text-white'
                              : 'text-slate-700 hover:bg-cyan-50'
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    ) : (
                      <>
                        {/* Accordion Header */}
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.title ? null : item.title
                            )
                          }
                          className="flex w-full items-center justify-between bg-white px-5 py-4 font-semibold text-slate-800 transition-all hover:bg-cyan-50"
                        >
                          <span>{item.title}</span>

                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.title ? 180 : 0
                            }}
                            transition={{
                              duration: 0.25
                            }}
                          >
                            <FiChevronDown size={20} />
                          </motion.div>
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0
                              }}
                              animate={{
                                height: 'auto',
                                opacity: 1
                              }}
                              exit={{
                                height: 0,
                                opacity: 0
                              }}
                              transition={{
                                duration: 0.3
                              }}
                              className="overflow-hidden bg-slate-50"
                            >
                              <div className="space-y-1 p-3">
                                {item.children.map(child => (
                                  <NavLink
                                    key={child.path}
                                    to={child.path}
                                    onClick={() => {
                                      setOpen(false)
                                      setActiveDropdown(null)
                                    }}
                                    className={({ isActive }) =>
                                      `flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
                                        isActive
                                          ? 'bg-cyan-600 text-white'
                                          : 'text-slate-600 hover:bg-white hover:text-cyan-600'
                                      }`
                                    }
                                  >
                                    <span>{child.name}</span>

                                    <motion.span
                                      whileHover={{
                                        x: 4
                                      }}
                                      transition={{
                                        duration: 0.2
                                      }}
                                    >
                                      →
                                    </motion.span>
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                )
              })}

              {/* Divider */}
              <div className="my-5 h-px bg-slate-200" />

              {/* Emergency Button */}
              <motion.a
                href="tel:+880123456789"
                whileTap={{
                  scale: 0.96
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-4 font-semibold text-cyan-700 transition-colors duration-300 hover:bg-cyan-100"
              >
                <FiPhoneCall size={20} />
                Emergency Call
              </motion.a>

              {/* Appointment Button */}
              <motion.button
                whileTap={{
                  scale: 0.96
                }}
                className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-sky-700"
              >
                <FiCalendar size={20} />
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
