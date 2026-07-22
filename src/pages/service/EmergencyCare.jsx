import { motion } from "motion/react";

import {
  FiPhoneCall,
  FiClock,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

import {
  FaAmbulance,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

const EmergencyCare = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-white py-20">
      {/* Background Blur */}
      <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-300/10 blur-[120px]" />

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, -18, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut'
        }}
        className="absolute left-16 top-28 hidden h-6 w-6 rounded-full bg-cyan-400 lg:block"
      />

      <motion.div
        animate={{
          y: [0, 15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut'
        }}
        className="absolute right-20 bottom-20 hidden h-8 w-8 rounded-full bg-red-400 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
              <FaHeartbeat />
              Emergency Care
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              24/7 Emergency
              <span className="text-cyan-600"> Medical Assistance</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Our emergency department is always ready to provide rapid,
              compassionate, and life-saving medical care with experienced
              physicians, modern equipment, and fully equipped ambulance
              services.
            </p>

            {/* Emergency Features */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                  <FiClock size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Available 24 Hours
                  </h3>

                  <p className="text-slate-500">
                    Immediate medical assistance every day.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-500">
                  <FaAmbulance size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Fast Ambulance Service
                  </h3>

                  <p className="text-slate-500">
                    Quick emergency transportation anytime.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                  <FaUserMd size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Emergency Specialists
                  </h3>

                  <p className="text-slate-500">
                    Experienced doctors available around the clock.
                  </p>
                </div>
              </div>
            </div>
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
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative"
          >
            {/* Main Emergency Card */}
            <motion.div
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.2
                }
              }}
              className="overflow-hidden rounded-[32px] border border-cyan-100 bg-white shadow-2xl"
            >
              {/* Top Header */}
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-rose-600 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                      Emergency Hotline
                    </span>

                    <h3 className="mt-5 text-4xl font-extrabold">
                      +880 1234 567890
                    </h3>

                    <p className="mt-3 text-red-100">
                      Call immediately for urgent medical assistance.
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-red-600 shadow-xl"
                  >
                    <FiPhoneCall size={34} />
                  </motion.div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-5 p-8">
                {/* Ambulance */}
                <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                      <FaAmbulance size={26} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">Ambulance</h4>

                      <p className="text-slate-500">Ready for Dispatch</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    Available
                  </span>
                </div>

                {/* Emergency Doctor */}
                <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                      <FaUserMd size={24} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        On-Duty Doctor
                      </h4>

                      <p className="text-slate-500">Emergency Specialist</p>
                    </div>
                  </div>

                  <span className="font-semibold text-cyan-600">Available</span>
                </div>

                {/* Hospital Location */}
                <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                      <FiMapPin size={24} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        Emergency Center
                      </h4>

                      <p className="text-slate-500">Open Every Day</p>
                    </div>
                  </div>

                  <span className="font-semibold text-slate-700">
                    Chattogram
                  </span>
                </div>
                {/* CTA Buttons */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Call Now */}
                  <motion.button
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.96
                    }}
                    className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-red-300"
                  >
                    <FiPhoneCall size={20} />
                    Call Now
                  </motion.button>

                  {/* Find Emergency */}
                  <motion.button
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.96
                    }}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-4 font-semibold text-cyan-700 transition-all duration-300 hover:bg-cyan-100"
                  >
                    Find Emergency
                    <FiArrowRight size={20} />
                  </motion.button>
                </div>

                {/* Statistics */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{
                      y: -5
                    }}
                    className="rounded-2xl bg-slate-50 p-5 text-center"
                  >
                    <h3 className="text-3xl font-extrabold text-cyan-600">
                      24/7
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Emergency Support
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5
                    }}
                    className="rounded-2xl bg-slate-50 p-5 text-center"
                  >
                    <h3 className="text-3xl font-extrabold text-red-500">
                      15+
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">Ambulances</p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5
                    }}
                    className="rounded-2xl bg-slate-50 p-5 text-center"
                  >
                    <h3 className="text-3xl font-extrabold text-cyan-600">
                      50+
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Emergency Doctors
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5
                    }}
                    className="rounded-2xl bg-slate-50 p-5 text-center"
                  >
                    <h3 className="text-3xl font-extrabold text-red-500">
                      5 min
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Average Response
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Emergency Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
              }}
              className="absolute -right-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-2xl border-t border-blue-400 lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <FaHeartbeat size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Emergency</h4>

                  <p className="text-sm text-slate-500">Ready 24/7</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
            delay: 0.3
          }}
          className="mt-20"
        >
          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-red-500 via-cyan-500 to-sky-500"></div>

          <p className="mt-6 text-center text-slate-500">
            Fast response, compassionate care, and experienced emergency
            specialists available{' '}
            <span className="font-semibold text-cyan-600">
              24 hours a day, 7 days a week.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EmergencyCare
