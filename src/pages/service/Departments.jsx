import { motion } from "motion/react";

import {
  FiArrowRight,
} from "react-icons/fi";

import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaTooth,
  FaEye,
  FaLungs,
  FaNotesMedical,
} from "react-icons/fa";

const departments = [
  {
    id: 1,
    title: "Cardiology",
    icon: <FaHeartbeat size={34} />,
    doctors: "18 Specialists",
    description:
      "Advanced diagnosis and treatment for heart and cardiovascular diseases.",
    color: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    text: "text-red-500",
  },
  {
    id: 2,
    title: "Neurology",
    icon: <FaBrain size={34} />,
    doctors: "12 Specialists",
    description:
      "Expert neurological care using modern diagnostic technology.",
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    id: 3,
    title: "Orthopedics",
    icon: <FaBone size={34} />,
    doctors: "15 Specialists",
    description:
      "Comprehensive bone, joint and muscle treatment with expert surgeons.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    text: "text-orange-500",
  },
  {
    id: 4,
    title: "Dental Care",
    icon: <FaTooth size={34} />,
    doctors: "10 Specialists",
    description:
      "Complete dental care including cosmetic and restorative treatments.",
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    text: "text-indigo-500",
  },
  {
    id: 5,
    title: "Ophthalmology",
    icon: <FaEye size={34} />,
    doctors: "8 Specialists",
    description:
      "Eye examinations, surgery and vision correction with modern equipment.",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    text: "text-emerald-500",
  },
  {
    id: 6,
    title: "Pulmonology",
    icon: <FaLungs size={34} />,
    doctors: "11 Specialists",
    description:
      "Specialized respiratory care for lung and breathing conditions.",
    color: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    text: "text-sky-500",
  },
];

const Departments = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-white py-20">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -18, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut'
        }}
        className="absolute left-20 top-32 hidden h-6 w-6 rounded-full bg-cyan-400 lg:block"
      />

      <motion.div
        animate={{
          y: [0, 20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut'
        }}
        className="absolute right-24 bottom-24 hidden h-8 w-8 rounded-full bg-sky-400 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-600">
            <FaNotesMedical />
            Medical Departments
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Specialized Departments
            <span className="text-cyan-600"> For Better Care</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Our experienced specialists provide comprehensive healthcare
            services across multiple medical departments using advanced
            technology and patient-centered treatment.
          </p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12
              }}
              whileHover={{
                y: -12,
                transition: {
                  duration: 0.2
                }
              }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Top Gradient */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${department.color}`}
              />

              {/* Background Glow */}
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${department.bg} opacity-40 blur-3xl transition-all duration-500 group-hover:scale-125`}
              />

              {/* Doctor Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.08
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300
                  }}
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl ${department.bg} ${department.text} shadow-md`}
                >
                  {department.icon}
                </motion.div>

                <span className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600">
                  {department.doctors}
                </span>
              </div>

              {/* Department Info */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                  {department.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {department.description}
                </p>
              </div>

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
                className={`absolute -bottom-10 -right-10 h-28 w-28 rounded-full ${department.bg} opacity-40`}
              />
              {/* Bottom Content */}
              <div className="relative z-10 mt-10 border-t border-slate-100 pt-6">
                {/* Availability */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>

                    <span className="text-sm font-medium text-slate-600">
                      Doctors Available
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-green-600">
                    Open Today
                  </span>
                </div>

                {/* Success Rate */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      Patient Satisfaction
                    </span>

                    <span className="font-bold text-cyan-600">98%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: '98%'
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${department.color}`}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{
                    x: 5
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
                >
                  Learn More
                  <motion.div
                    whileHover={{
                      x: 4
                    }}
                    transition={{
                      duration: 0.2
                    }}
                  >
                    <FiArrowRight size={20} />
                  </motion.div>
                </motion.button>
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
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="mt-20 rounded-[32px] overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                Comprehensive Healthcare
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
                Find The Right Department
                <span className="text-cyan-100">
                  {' '}
                  For Your Healthcare Needs
                </span>
              </h2>

              <p className="mt-4 leading-8 text-cyan-100">
                Our multidisciplinary medical departments work together to
                provide accurate diagnosis, advanced treatment, and
                compassionate care for every patient.
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
              Explore All Departments
            </motion.button>
          </div>
        </motion.div>
        {/* Bottom Decorative Element */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-16 rounded-full bg-cyan-500"></div>

            <div className="h-3 w-3 rounded-full bg-cyan-500"></div>

            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>

            <div className="h-3 w-3 rounded-full bg-sky-500"></div>

            <div className="h-1 w-16 rounded-full bg-sky-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Departments
