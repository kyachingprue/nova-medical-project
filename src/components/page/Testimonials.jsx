import { motion } from "motion/react";
import {
  FiStar,
  FiHeart,
  FiAward,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";

import backgroundGradient from "../../assets/images/banner-gradient.jpg";

// ==========================================
// Testimonial Data
// ==========================================

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Heart Patient",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "The doctors and nurses were incredibly caring throughout my treatment. Their professionalism and kindness made my recovery journey much easier.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Dental Patient",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Excellent medical facilities with experienced specialists. Every appointment was smooth and the staff always treated me with respect.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Family Care",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Our entire family trusts this hospital. The doctors explain everything clearly and always provide exceptional care with genuine compassion.",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Orthopedic Patient",
    image:
      "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    review:
      "From surgery to rehabilitation, the healthcare team exceeded my expectations. Highly recommended for anyone seeking quality medical care.",
  },
  {
    id: 5,
    name: "Sophia Davis",
    role: "General Checkup",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "Scheduling appointments was simple, and every doctor I met was knowledgeable, friendly, and attentive to my concerns.",
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Emergency Care",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    review:
      "The emergency department responded quickly and professionally. I felt safe and well cared for from the moment I arrived.",
  },
];

// ==========================================
// Statistics
// ==========================================

const stats = [
  {
    icon: FiUsers,
    number: "10K+",
    title: "Happy Patients",
  },
  {
    icon: FiAward,
    number: "98%",
    title: "Satisfaction Rate",
  },
  {
    icon: FiHeart,
    number: "24/7",
    title: "Patient Care",
  },
];

// ==========================================
// Motion Variants
// ==========================================

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// ==========================================
// Component
// ==========================================

export default function Testimonials() {
  return (
    <main
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: `url(${backgroundGradient})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-300/20 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 6
        }}
        className="absolute left-10 top-40 h-8 w-8 rounded-full bg-blue-500/40"
      />

      <motion.div
        animate={{
          y: [0, 18, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute right-20 top-32 h-6 w-6 rounded-full bg-cyan-500/40"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ==========================================================
                            HERO SECTION
        ========================================================== */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-md"
          >
            <FiHeart className="text-red-500" />
            Patient Testimonials
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            What Our
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {' '}
              Patients Say
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Every smile, every recovery, and every success story inspires us.
            Read what our patients say about the compassionate care and
            professional medical services they've received.
          </motion.p>

          {/* Quote Icon */}
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5
            }}
            className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-xl"
          >
            <FiMessageSquare size={34} />
          </motion.div>
        </motion.section>

        {/* ==========================================================
                            STATISTICS
        ========================================================== */}

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map(stat => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03
                }}
                className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-4xl font-black text-slate-900">
                      {stat.number}
                    </h3>

                    <p className="mt-1 text-slate-600">{stat.title}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.section>

        {/* ==========================================================
                        TESTIMONIALS SECTION
        ========================================================== */}

        <div className="mt-24">
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {testimonials.map(testimonial => (
              <motion.div
                key={testimonial.id}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.02
                }}
                transition={{
                  duration: 0.35
                }}
                className="group relative overflow-hidden rounded-4xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-200/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-cyan-200/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                {/* Quote Icon */}
                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.1
                  }}
                  className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                >
                  <FiMessageSquare size={24} />
                </motion.div>

                {/* Patient */}
                <div className="relative z-10 flex items-center gap-4">
                  <motion.img
                    whileHover={{
                      scale: 1.08
                    }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-20 w-20 rounded-full border-4 border-blue-100 object-cover shadow-lg"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-blue-600">
                      {testimonial.role}
                    </p>

                    {/* Stars */}
                    <div className="mt-3 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.3,
                            rotate: 15
                          }}
                        >
                          <FiStar
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-slate-200" />

                {/* Review */}
                <motion.p
                  whileHover={{
                    x: 4
                  }}
                  className="relative z-10 text-base leading-8 text-slate-600"
                >
                  "{testimonial.review}"
                </motion.p>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700">
                    Verified Patient
                  </span>

                  <motion.div
                    whileHover={{
                      x: 6
                    }}
                    className="font-semibold text-blue-600"
                  >
                    Read Story →
                  </motion.div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.section>

          {/* ==========================================================
                        DOCTOR RECOMMENDATION
        ========================================================== */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-28 overflow-hidden rounded-[40px] border border-white/60 bg-white/80 p-10 shadow-2xl backdrop-blur-xl lg:p-14"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left */}
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                  Doctor's Promise
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                  Your Health Is
                  <span className="text-blue-600"> Our Highest Priority</span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Every patient deserves compassionate treatment, advanced
                  medical technology, and dedicated healthcare professionals.
                  Our mission is to provide exceptional care while making every
                  patient feel safe, respected, and valued.
                </p>
              </div>

              {/* Right Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                className="rounded-3xl bg-linear-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Doctor"
                    className="h-20 w-20 rounded-full border-4 border-white object-cover"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">Dr. William Smith</h3>

                    <p className="text-blue-100">Chief Medical Officer</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-8 text-blue-100">
                  "Every recovery story begins with trust. We are honored to
                  care for our patients with compassion, expertise, and
                  unwavering commitment."
                </p>
              </motion.div>
            </div>
          </motion.section>
          {/* ==========================================================
                            CTA SECTION
        ========================================================== */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-28 overflow-hidden rounded-[40px] bg-linear-to-r from-blue-600 via-blue-700 to-cyan-500 p-10 shadow-2xl lg:p-16"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left Content */}
              <div>
                <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                  Trusted By Thousands
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                  Join Over
                  <br />
                  10,000 Happy Patients
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                  Experience world-class healthcare with compassionate doctors,
                  advanced medical technology, and personalized treatment plans
                  designed around your needs.
                </p>
              </div>

              {/* Right Content */}
              <div className="flex flex-wrap justify-start gap-5 lg:justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition"
                >
                  Book Appointment
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* ==========================================================
                            TRUST BAR
        ========================================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Trusted Healthcare',
                desc: 'Providing exceptional care with compassion and excellence.'
              },
              {
                title: 'Experienced Doctors',
                desc: 'Highly qualified specialists committed to your well-being.'
              },
              {
                title: 'Modern Facilities',
                desc: 'Advanced technology for accurate diagnosis and treatment.'
              }
            ].map(item => (
              <motion.div
                key={item.title}
                variants={item}
                whileHover={{
                  y: -8
                }}
                className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
