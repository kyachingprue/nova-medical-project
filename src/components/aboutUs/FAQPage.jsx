import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiPlus,
  FiMinus,
  FiArrowRight,
} from "react-icons/fi";
import { Button } from "@mui/material";

// ----------------------------
// Images
// Replace with your own images
// ----------------------------

const heroImage =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600";

const doctorImage =
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200";

const stethoscopeImage =
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200";

// ----------------------------
// FAQ DATA
// ----------------------------

const generalQuestions = [
  {
    id: 1,
    question: "How do I get a copy of my medical records?",
    answer:
      "You can request your medical records through our patient portal or by visiting the hospital reception. Requests are usually processed within 3–5 business days.",
  },
  {
    id: 2,
    question: "Can I request a copy of my MRI online?",
    answer:
      "Yes. Simply log into your account and submit an online imaging request. You'll receive a notification once it's ready.",
  },
  {
    id: 3,
    question: "What if I do not have insurance?",
    answer:
      "We provide affordable self-pay options along with financial assistance programs for eligible patients.",
  },
  {
    id: 4,
    question: "What operations do you perform?",
    answer:
      "Our hospital offers general surgery, orthopedics, cardiology, neurology, pediatric surgery, and many other specialized procedures.",
  },
  {
    id: 5,
    question: "How can I book an examination?",
    answer:
      "Appointments can be scheduled online, over the phone, or directly at our front desk.",
  },
];

const appointmentQuestions = [
  {
    id: 1,
    question: "How much will my hospital stay cost?",
    answer:
      "The cost depends on your treatment, room type, insurance coverage, and duration of stay. Our billing team can provide an estimate.",
  },
  {
    id: 2,
    question: "What if I have difficulty paying my expenses?",
    answer:
      "We offer flexible payment plans and financial counseling to help patients manage healthcare costs.",
  },
  {
    id: 3,
    question: "What if I do not have insurance?",
    answer:
      "Our staff will help you explore financial aid options and discounted payment programs.",
  },
  {
    id: 4,
    question: "What happens after my admission?",
    answer:
      "You'll be guided through registration, consultation, treatment planning, and continuous care by our medical team.",
  },
  {
    id: 5,
    question: "How can I book an examination?",
    answer:
      "Appointments can be made 24/7 through our website or by contacting our support center.",
  },
];

// ----------------------------
// Animation Variants
// ----------------------------

const fadeUp = {
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// ----------------------------
// Accordion Component
// ----------------------------

function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
          }}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
          >
            <h3 className="text-sm font-semibold text-slate-700 md:text-base">
              {item.question}
            </h3>

            <div className="text-blue-600">
              {open === index ? (
                <FiMinus size={20} />
              ) : (
                <FiPlus size={20} />
              )}
            </div>
          </button>

          <AnimatePresence>
            {open === index && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ----------------------------
// Main Component Starts Here
// ----------------------------

export default function FAQPage() {
  return (
    <div className="overflow-hidden bg-white pt-16">
      {/* =======================================================
          HERO SECTION
      ======================================================== */}

      <section className="relative h-105 overflow-hidden md:h-130 lg:h-166">
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: 'easeOut'
          }}
          src={heroImage}
          alt="Medical Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/45 to-blue-700/20" />

        {/* Floating Blur Circle */}
        <motion.div
          animate={{
            y: [0, -25, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
          className="absolute right-20 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* Floating Blur Circle */}
        <motion.div
          animate={{
            y: [0, 20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
          className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md"
            >
              Frequently Asked Questions
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.4,
                duration: 0.8
              }}
              className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Frequently
              <br />
              Asked Questions
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.7
              }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg"
            >
              Our administrative and clinical team is second to none. We
              continuously strive to deliver exceptional healthcare while
              ensuring every patient receives the support, compassion, and
              answers they deserve.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 1
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="contained" className="rounded-full! bg-blue-600! px-8! py-4! font-semibold! text-white! transition! hover:bg-blue-700! active:scale-95">
                Book Appointment
              </Button>

              <button className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900 active:scale-95">
                Learn More
                <FiArrowRight />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom White Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="relative block h-30 w-full md:h-37.5"
          >
            <path
              fill="#ffffff"
              d="
              M0,96
              C240,170
              420,10
              720,90
              C980,165
              1200,40
              1440,95
              L1440,180
              L0,180
              Z
              "
            />
          </svg>
        </div>
      </section>

      {/* =======================================================
          CONTENT WRAPPER
      ======================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* ============================================
            FIRST FAQ SECTION
        ============================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-blue-100 blur-3xl"></div>

            {/* Small Decoration */}
            <motion.div
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              className="absolute -right-4 top-10 h-24 w-24 rounded-full bg-cyan-200"
            ></motion.div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-4xl bg-white shadow-2xl">
              <img
                src={doctorImage}
                alt="Doctor"
                className="h-155 w-full object-cover"
              />

              {/* Overlay Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.5
                }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-lg"
              >
                <h4 className="text-lg font-bold text-slate-800">
                  24/7 Patient Support
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Our dedicated healthcare team is always available to answer
                  your questions and provide immediate assistance whenever you
                  need it.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              General Questions
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Frequently Asked
              <br />
              General Questions
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Find answers to the most common questions regarding appointments,
              insurance, billing, medical records, surgeries, and hospital
              services.
            </p>

            <div className="mt-10">
              <Accordion items={generalQuestions} />
            </div>
          </motion.div>
        </div>

        {/* ============================================
                Divider
        ============================================= */}

        <div className="my-28 h-px w-full bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* ============================================
            SECOND FAQ SECTION
        ============================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Appointments & Billing
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Hospital Admission
              <br />
              Questions
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Learn more about admission procedures, treatment costs, insurance
              coverage, financial assistance, and patient services before your
              hospital visit.
            </p>

            <div className="mt-10">
              <Accordion items={appointmentQuestions} />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -right-8 bottom-0 h-64 w-64 rounded-full bg-cyan-100 blur-3xl"></div>

            <motion.div
              animate={{
                y: [0, 15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
              className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-blue-200"
            ></motion.div>

            <div className="relative overflow-hidden rounded-4xl bg-white shadow-2xl">
              <img
                src={stethoscopeImage}
                alt="Hospital"
                className="h-155 w-full object-cover"
              />

              {/* Floating Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  delay: 0.4
                }}
                viewport={{ once: true }}
                className="absolute left-6 top-6 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-lg"
              >
                <div className="text-4xl font-extrabold text-blue-600">98%</div>

                <div className="mt-2 text-sm text-slate-600">
                  Patient Satisfaction
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* ============================================
                CTA SECTION
        ============================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-[40px] bg-linear-to-r from-blue-600 via-blue-700 to-cyan-600 p-10 text-white shadow-2xl lg:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur">
                Need More Help?
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Still Have
                <br />
                Questions?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                If you couldn't find the answer you're looking for, our
                healthcare specialists are always available to assist you.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap justify-start gap-5 lg:justify-end">
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Us
              </button>

              <button className="rounded-full border border-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-700">
                Book Appointment
              </button>
            </div>
          </div>
        </motion.div>

        {/* ============================================
                STATS SECTION
        ============================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              number: '25+',
              title: 'Years Experience'
            },
            {
              number: '120+',
              title: 'Doctors'
            },
            {
              number: '40K+',
              title: 'Happy Patients'
            },
            {
              number: '24/7',
              title: 'Emergency Service'
            }
          ].map(item => (
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all"
            >
              <h3 className="text-5xl font-extrabold text-blue-600">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
