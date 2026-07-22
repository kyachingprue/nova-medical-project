import { motion } from "motion/react";

import {
  FiCalendar,
  FiUser,
  FiMail,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";

import {
  FaCalendarCheck,
  FaHeartbeat,
} from "react-icons/fa";

const BookAppointment = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-white py-20">

      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-24 hidden h-6 w-6 rounded-full bg-cyan-400 lg:block"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute right-24 bottom-20 hidden h-8 w-8 rounded-full bg-sky-400 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-600">
            <FaCalendarCheck />
            Appointment Booking
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Book Your
            <span className="text-cyan-600"> Medical Appointment</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Schedule your consultation with our experienced specialists quickly
            and easily. Choose your preferred department, doctor, date, and
            time—all in just a few simple steps.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* ================= Left Form ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-[32px] border border-cyan-100 bg-white p-8 shadow-xl"
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                <FaHeartbeat size={30} />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Appointment Form
                </h3>

                <p className="text-slate-500">
                  Fill in your information below.
                </p>

              </div>

            </div>

            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                              {/* Full Name */}
              <div className="relative">

                <FiUser
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* Email */}
              <div className="relative">

                <FiMail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

              </div>

            </div>

            {/* Phone + Department */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Phone */}
              <div className="relative">

                <FiPhone
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* Department */}
              <div className="relative">

                <select
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-12 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                >
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dental Care</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>

                <FiChevronDown
                  size={20}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
                />

              </div>

            </div>

            {/* Doctor */}
            <div className="relative">

              <select
                className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-12 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              >
                <option>Select Doctor</option>
                <option>Dr. Sarah Johnson</option>
                <option>Dr. Michael Lee</option>
                <option>Dr. Emily Brown</option>
                <option>Dr. David Wilson</option>
                <option>Dr. Olivia Martinez</option>
              </select>

              <FiChevronDown
                size={20}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              </div>
                          {/* Date + Time */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Appointment Date */}
              <div className="relative">

                <FiCalendar
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600"
                />

                <input
                  type="date"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* Appointment Time */}
              <div className="relative">

                <select
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-12 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                >
                  <option>Select Time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>
                </select>

                <FiChevronDown
                  size={20}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
                />

              </div>

            </div>

            {/* Message */}
            <div>

              <textarea
                rows={5}
                placeholder="Describe your symptoms or write an additional message..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />

            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-300"
            >
              Book Appointment

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                <FiCalendar size={20} />
              </motion.div>

            </motion.button>

          </form>

        </motion.div>

        {/* ================= Right Side ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
          >
                      {/* Main Medical Card */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden rounded-[32px] border border-cyan-100 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-8 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                    Healthcare Excellence
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    Your Health,
                    <br />
                    Our Priority
                  </h3>

                  <p className="mt-4 text-cyan-100">
                    Trusted specialists delivering compassionate and advanced
                    medical care every day.
                  </p>

                </div>

                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-cyan-600 shadow-xl"
                >
                  <FaHeartbeat size={38} />
                </motion.div>

              </div>

            </div>

            {/* Features */}
            <div className="space-y-5 p-8">

              <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <FaCalendarCheck size={24} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Instant Booking
                    </h4>

                    <p className="text-slate-500">
                      Schedule appointments in minutes.
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  Available
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <FaHeartbeat size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Emergency Care
                    </h4>

                    <p className="text-slate-500">
                      24/7 emergency medical support.
                    </p>

                  </div>

                </div>

                <span className="font-semibold text-cyan-600">
                  24 Hours
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <FiUser size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Expert Specialists
                    </h4>

                    <p className="text-slate-500">
                      Highly qualified healthcare professionals.
                    </p>

                  </div>

                </div>

                <span className="font-semibold text-cyan-600">
                  50+
                </span>

              </div>

              {/* Statistics */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <h3 className="text-3xl font-extrabold text-cyan-600">
                    25K+
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Happy Patients
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <h3 className="text-3xl font-extrabold text-cyan-600">
                    98%
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Success Rate
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <h3 className="text-3xl font-extrabold text-cyan-600">
                    45+
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Specialists
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <h3 className="text-3xl font-extrabold text-cyan-600">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Support
                  </p>
                </motion.div>

              </div>

            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute -right-5 -top-5 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
          >
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <FaHeartbeat size={22} />
              </div>

              <div>

                <h4 className="font-bold text-slate-900">
                  Trusted Care
                </h4>

                <p className="text-sm text-slate-500">
                  Since 2010
                </p>

              </div>

            </div>
            </motion.div>
                      {/* Decorative Bottom Line */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-3">

              <span className="h-1 w-14 rounded-full bg-cyan-500"></span>

              <span className="h-3 w-3 rounded-full bg-cyan-500"></span>

              <span className="h-1 w-32 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></span>

              <span className="h-3 w-3 rounded-full bg-sky-500"></span>

              <span className="h-1 w-14 rounded-full bg-sky-500"></span>

            </div>
          </motion.div>
         </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BookAppointment;
