import { motion } from "motion/react";
import { useState } from "react";

import {
  FiSearch,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

import { FaStar } from "react-icons/fa";

import doctor1 from "../../assets/images/doctor1.avif";
import doctor2 from "../../assets/images/doctor2.jpg";
import doctor3 from "../../assets/images/doctor3.jpg";
import doctor4 from "../../assets/images/doctor4.jpg";
import doctor5 from "../../assets/images/doctor5.jpg";
import doctor6 from "../../assets/images/doctor6.avif";
import { Helmet } from "react-helmet-async";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Olivia Smith",
    specialty: "Cardiologist",
    experience: "15+ Years",
    rating: 4.9,
    location: "Chattogram",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Noah Martin",
    specialty: "Neurologist",
    experience: "12+ Years",
    rating: 4.8,
    location: "Dhaka",
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Emma Wilson",
    specialty: "Dentist",
    experience: "10+ Years",
    rating: 4.9,
    location: "Sylhet",
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Ethan White",
    specialty: "Orthopedic",
    experience: "18+ Years",
    rating: 5.0,
    location: "Rajshahi",
  },
  {
    id: 5,
    image: doctor5,
    name: "Dr. Sophia Brown",
    specialty: "Pediatrician",
    experience: "11+ Years",
    rating: 4.8,
    location: "Khulna",
  },
  {
    id: 6,
    image: doctor6,
    name: "Dr. Daniel Lee",
    specialty: "Psychologist",
    experience: "13+ Years",
    rating: 4.9,
    location: "Chattogram",
  },
];

const Doctors = () => {
  const [search, setSearch] = useState('')

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cyan-50 via-white to-white py-28">
      <Helmet>
        <title>All Doctors | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-700">
            Medical Specialists
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Find Your Trusted
            <span className="text-cyan-600"> Doctor</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-500">
            Connect with experienced healthcare professionals dedicated to
            providing compassionate care and personalized treatment for every
            patient.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mt-14 rounded-3xl border border-cyan-100 bg-white p-5 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <FiSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600"
                size={20}
              />

              <input
                type="text"
                placeholder="Search doctor by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="h-14 w-full rounded-2xl border border-slate-200 pl-14 pr-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            {/* Department */}
            <select className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Dentistry</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Psychology</option>
            </select>
          </div>
        </motion.div>

        {/* Doctors Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {doctors
            .filter(doctor =>
              doctor.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((doctor, index) => (
              <motion.div
                key={doctor.id}
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
                  duration: 0.6,
                  delay: index * 0.12
                }}
                whileHover={{
                  y: -10
                }}
                className="group overflow-hidden rounded-[28px] border border-cyan-100 bg-white shadow-lg hover:shadow-2xl hover:shadow-cyan-100"
              >
                {/* Doctor Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{
                      scale: 1.08
                    }}
                    transition={{
                      duration: 0.5
                    }}
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-85 w-full object-cover"
                  />

                  {/* Rating Badge */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold text-slate-800">
                      {doctor.rating}
                    </span>
                  </div>

                  {/* Experience */}
                  <div className="absolute right-5 top-5 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {doctor.experience}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Doctor Name */}
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                    {doctor.name}
                  </h3>

                  {/* Department */}
                  <p className="mt-2 text-lg font-medium text-cyan-600">
                    {doctor.specialty}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-200"></div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-slate-500">
                    <FiMapPin className="text-cyan-600" />
                    <span>{doctor.location}</span>
                  </div>

                  {/* Appointment */}
                  <div className="mt-3 flex items-center gap-2 text-slate-500">
                    <FiCalendar className="text-cyan-600" />
                    <span>Available Today</span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-3">
                    <motion.button
                      whileHover={{
                        scale: 1.03
                      }}
                      whileTap={{
                        scale: 0.96
                      }}
                      className="flex-1 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-sky-700"
                    >
                      Book Appointment
                    </motion.button>

                    <motion.button
                      whileHover={{
                        x: 5
                      }}
                      whileTap={{
                        scale: 0.96
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl border border-cyan-200 px-5 py-3 font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-50"
                    >
                      View Profile
                      <FiArrowRight />
                    </motion.button>
                  </div>

                  {/* Bottom Information */}
                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Experience
                      </p>

                      <h4 className="mt-1 font-bold text-slate-800">
                        {doctor.experience}
                      </h4>
                    </div>

                    <div className="h-10 w-px bg-slate-200"></div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Rating
                      </p>

                      <div className="mt-1 flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="font-bold text-slate-800">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>

                    <div className="h-10 w-px bg-slate-200"></div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Status
                      </p>

                      <span className="mt-1 inline-flex items-center gap-2 font-semibold text-emerald-600">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Bottom CTA */}
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
            duration: 0.8
          }}
          className="mt-20 rounded-4xl overflow-hidden bg-linear-to-r from-cyan-600 via-sky-600 to-blue-700 p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                Trusted Healthcare
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
                Your Health Deserves
                <span className="text-cyan-100"> The Best Doctors</span>
              </h2>

              <p className="mt-4 leading-8 text-cyan-100">
                Our experienced specialists provide compassionate care, accurate
                diagnosis, and personalized treatment to help you achieve better
                health and peace of mind.
              </p>
            </div>

            {/* Right */}
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.96
              }}
              className="rounded-2xl bg-white px-8 py-4 font-bold text-cyan-700 shadow-xl transition-all duration-300 hover:bg-cyan-50"
            >
              View All Doctors
            </motion.button>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-10 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-white">50+</h3>

              <p className="mt-2 text-cyan-100">Expert Doctors</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-white">15K+</h3>

              <p className="mt-2 text-cyan-100">Happy Patients</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-white">98%</h3>

              <p className="mt-2 text-cyan-100">Success Rate</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-white">20+</h3>

              <p className="mt-2 text-cyan-100">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Doctors
