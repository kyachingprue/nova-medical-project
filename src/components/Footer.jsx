import { FaFacebookF, FaHeartbeat, FaLinkedinIn, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router';
import {motion} from "motion/react"

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#214ea9]/85"></div>

      <div className="relative max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <div>
              <Link to="/">
                <motion.div
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg">
                    <FaHeartbeat className="text-3xl" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-100">
                      Nova
                    </h2>

                    <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-300">
                      Medicare
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>

            <p className="text-[17px] leading-9 pt-5 text-gray-100">
              Professional, responsive, and soothing design for therapists,
              counselors, and life coaches.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="w-11 h-11 rounded-full bg-pink-400 hover:bg-pink-500 duration-300 flex justify-center items-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full bg-pink-400 hover:bg-pink-500 duration-300 flex justify-center items-center cursor-pointer">
                <FaTimes />
              </div>

              <div className="w-11 h-11 rounded-full bg-pink-400 hover:bg-pink-500 duration-300 flex justify-center items-center cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl font-bold text-pink-400 mb-8">Contact</h3>

            <ul className="space-y-5 text-lg">
              <li>
                123 Serenity Lane, Blissfield, CA
                <br />
                90210, United States
              </li>

              <li>Info@yourmail.com</li>

              <li>(555) 123-4567</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-3xl font-bold text-pink-400 mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-lg">
              <li className="hover:text-pink-400 cursor-pointer">Homepage</li>

              <li className="hover:text-pink-400 cursor-pointer">Services</li>

              <li className="hover:text-pink-400 cursor-pointer">
                Appointment
              </li>

              <li className="hover:text-pink-400 cursor-pointer">Blogs</li>

              <li className="hover:text-pink-400 cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-3xl font-bold text-pink-400 mb-5">
              Newsletter
            </h3>

            <p className="font-semibold mb-6">
              Get the latest news other tips.
            </p>

            <input
              type="email"
              placeholder="Your email here"
              className="w-full rounded-md border border-blue-300 outline-none px-4 py-2 text-gray-50 text-lg"
            />

            <button className="w-full h-14 mt-5 rounded-full bg-pink-400 hover:bg-pink-500 duration-300 text-lg font-semibold">
              Subscribe now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 mt-16 pt-8">
          <p className="text-center text-lg">
            Copyright © 2025 Widagdos. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
