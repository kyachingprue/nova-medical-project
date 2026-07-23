import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    id: 1,
    icon: <FiPhoneCall size={28} />,
    title: "Emergency Hotline",
    value: "+880 1234 567 890",
    description: "Available 24 hours every day",
  },
  {
    id: 2,
    icon: <FiMail size={28} />,
    title: "Email Address",
    value: "support@medicare.com",
    description: "Send us your questions anytime",
  },
  {
    id: 3,
    icon: <FiMapPin size={28} />,
    title: "Hospital Location",
    value: "123 Medical Street",
    description: "Chattogram, Bangladesh",
  },
  {
    id: 4,
    icon: <FiClock size={28} />,
    title: "Opening Hours",
    value: "Mon - Sat",
    description: "08:00 AM - 09:00 PM",
  },
];

const ContactUs = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cyan-50 via-white to-white py-28">
      <Helmet>
        <title>Contact | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      {/* Decorative Background */}
      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-200/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7
          }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Get In Touch With
            <span className="text-cyan-600"> Our Experts</span>
          </h2>

          <p className="mt-6 text-slate-500 leading-8">
            We're here to answer your questions, schedule appointments, and
            provide the healthcare support you deserve.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7
            }}
            className="space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12
                  }}
                  whileHover={{
                    y: -8
                  }}
                  className="group rounded-3xl border border-cyan-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-cyan-300 hover:shadow-cyan-100"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-sky-600 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-cyan-600">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Emergency Banner */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
              whileHover={{
                scale: 1.02
              }}
              className="relative overflow-hidden rounded-[30px] bg-linear-to-r from-cyan-600 via-sky-600 to-blue-700 p-8 text-white shadow-2xl"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  24/7 Emergency Service
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight">
                  Need Immediate Medical Assistance?
                </h3>

                <p className="mt-4 max-w-md leading-7 text-cyan-100">
                  Our emergency medical team is available around the clock to
                  provide urgent healthcare support whenever you need it.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-cyan-700 shadow-lg transition-colors hover:bg-cyan-50"
                >
                  <FiPhoneCall size={20} />
                  Call Emergency
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7
            }}
          >
            <div className="rounded-4xl border border-cyan-100 bg-white p-6 shadow-2xl md:p-8">
              <div className="mb-8">
                <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  Send Us a Message
                </span>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  Book an Appointment
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  Fill out the form below and our medical team will contact you
                  as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Full Name"
                    className="h-14 rounded-xl border border-slate-200 px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Email Address"
                    className="h-14 rounded-xl border border-slate-200 px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 rounded-xl border border-slate-200 px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Subject"
                    className="h-14 rounded-xl border border-slate-200 px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                {/* Department */}
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  className="h-14 w-full rounded-xl border border-slate-200 bg-white px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                >
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dental Care</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                </motion.select>

                {/* Message */}
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-200 p-5 outline-none transition-all duration-300 resize-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.03
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-sky-700"
                >
                  <FiSend size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="mt-20 rounded-4xl bg-linear-to-r from-cyan-600 via-sky-600 to-blue-700 p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            <div>
              <h3 className="text-4xl font-extrabold text-white">10K+</h3>
              <p className="mt-2 text-cyan-100">Happy Patients</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-white">120+</h3>
              <p className="mt-2 text-cyan-100">Medical Specialists</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-white">20+</h3>
              <p className="mt-2 text-cyan-100">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-white">98%</h3>
              <p className="mt-2 text-cyan-100">Patient Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
