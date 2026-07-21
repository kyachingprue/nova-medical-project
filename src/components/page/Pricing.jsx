import { useState } from "react";
import { motion } from "motion/react";
import {
  FiCheck,
  FiArrowRight,
  FiHeart,
  FiShield,
  FiActivity,
} from "react-icons/fi";

import backgroundGradient from "../../assets/images/banner-gradient.jpg";

// ============================================
// Pricing Data
// ============================================

const pricingPlans = [
  {
    id: 1,
    title: "Basic Care",
    icon: FiHeart,
    monthly: 29,
    yearly: 290,
    description:
      "Perfect for individuals looking for essential healthcare services.",
    color: "from-sky-500 to-cyan-500",
    popular: false,
    features: [
      "General Consultation",
      "Basic Health Checkup",
      "1 Doctor Appointment",
      "Email Support",
      "Medical Advice",
    ],
  },
  {
    id: 2,
    title: "Standard Care",
    icon: FiShield,
    monthly: 79,
    yearly: 790,
    description:
      "Our most popular healthcare package for families and professionals.",
    color: "from-blue-600 to-indigo-600",
    popular: true,
    features: [
      "Unlimited Consultation",
      "Priority Appointment",
      "Laboratory Tests",
      "Emergency Support",
      "Medicine Discount",
      "Family Health Records",
    ],
  },
  {
    id: 3,
    title: "Premium Care",
    icon: FiActivity,
    monthly: 149,
    yearly: 1490,
    description:
      "Advanced healthcare with specialist doctors and premium support.",
    color: "from-purple-600 to-pink-600",
    popular: false,
    features: [
      "Everything in Standard",
      "Specialist Doctors",
      "24/7 Medical Assistance",
      "Personal Health Advisor",
      "Surgery Discount",
      "VIP Support",
    ],
  },
];

// ============================================
// Motion Variants
// ============================================

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
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

// ============================================
// Component
// ============================================

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

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
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4">
        {/* =====================================================
                        HERO SECTION
        ====================================================== */}

        <motion.div
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
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm"
          >
            <FiHeart className="text-red-500" />
            Affordable Healthcare Plans
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Choose Your
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {' '}
              Medical Plan
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Flexible healthcare packages designed for individuals, families, and
            businesses. Get high-quality medical care at transparent and
            affordable prices.
          </motion.p>
        </motion.div>

        {/* =====================================================
                        TOGGLE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="flex items-center gap-5 rounded-full border border-slate-200 bg-white px-6 py-4 shadow-xl">
            {/* Monthly */}
            <span
              className={`text-sm font-semibold transition ${
                !isYearly ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              Monthly
            </span>

            {/* Switch */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative h-8 w-16 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <motion.div
                layout
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md ${
                  isYearly ? 'left-9' : 'left-1'
                }`}
              />
            </button>

            {/* Yearly */}
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold transition ${
                  isYearly ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                Yearly
              </span>

              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
                      SECTION SPACING
        ====================================================== */}

        <div className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 lg:grid-cols-3"
          >
            {pricingPlans.map(plan => {
              const Icon = plan.icon

              return (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -15,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.35
                  }}
                  className={`relative overflow-hidden rounded-4xl border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl ${
                    plan.popular ? 'lg:-mt-8 lg:mb-8' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute right-5 top-5 z-20 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      ⭐ Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`bg-linear-to-r ${plan.color} p-8 text-white`}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1
                      }}
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur"
                    >
                      <Icon size={30} />
                    </motion.div>

                    <h3 className="text-3xl font-black">{plan.title}</h3>

                    <p className="mt-3 leading-7 text-white/90">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-8 flex items-end gap-2">
                      <span className="text-2xl font-semibold">$</span>

                      <motion.span
                        key={isYearly}
                        initial={{
                          opacity: 0,
                          y: 20
                        }}
                        animate={{
                          opacity: 1,
                          y: 0
                        }}
                        transition={{
                          duration: 0.3
                        }}
                        className="text-6xl font-black"
                      >
                        {isYearly ? plan.yearly : plan.monthly}
                      </motion.span>

                      <span className="pb-2 text-lg">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <h4 className="mb-6 text-lg font-bold text-slate-900">
                      What's Included
                    </h4>

                    <div className="space-y-4">
                      {plan.features.map(feature => (
                        <motion.div
                          key={feature}
                          whileHover={{
                            x: 6
                          }}
                          className="flex items-center gap-4"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <FiCheck size={16} />
                          </div>

                          <span className="text-slate-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-8 h-px bg-slate-200"></div>

                    {/* Button */}
                    <motion.button
                      whileHover={{
                        scale: 1.04
                      }}
                      whileTap={{
                        scale: 0.97
                      }}
                      className={`group flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r ${plan.color} px-6 py-4 font-bold text-white shadow-xl transition`}
                    >
                      Choose Plan
                      <motion.span
                        className="flex"
                        whileHover={{
                          x: 5
                        }}
                      >
                        <FiArrowRight />
                      </motion.span>
                    </motion.button>
                  </div>

                  {/* Decorative Glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/20 blur-3xl" />

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* =====================================================
                        CTA SECTION
        ====================================================== */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-[40px] bg-linear-to-r from-blue-600 via-blue-700 to-cyan-600 p-10 shadow-2xl lg:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                Need a Custom Healthcare Plan?
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Let's Build the
                <br />
                Perfect Plan for You
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Every patient is different. Contact our healthcare specialists
                and we'll create a personalized medical plan based on your
                healthcare needs.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap justify-start gap-5 lg:justify-end">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl"
              >
                Contact Us
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="rounded-full border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-blue-700 transition"
              >
                Book Appointment
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
                        STATS
        ====================================================== */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              number: '10K+',
              title: 'Happy Patients'
            },
            {
              number: '120+',
              title: 'Expert Doctors'
            },
            {
              number: '15+',
              title: 'Medical Departments'
            },
            {
              number: '24/7',
              title: 'Emergency Support'
            }
          ].map(stat => (
            <motion.div
              key={stat.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="rounded-3xl border border-white/50 bg-white/80 p-8 text-center shadow-xl backdrop-blur-xl"
            >
              <h3 className="text-5xl font-black text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-3 text-slate-600">{stat.title}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  )
}

