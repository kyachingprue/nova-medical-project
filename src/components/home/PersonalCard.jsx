import {
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
  FaStethoscope
} from 'react-icons/fa'

import { motion } from 'motion/react'

const cards = [
  {
    id: 1,
    title: 'Personalized\nWellness Plans',
    description:
      'Tailored healthcare strategies designed around your lifestyle, medical history, and wellness goals.',
    icon: <FaHeartbeat size={28} />,
    bg: 'from-cyan-500 to-sky-600'
  },
  {
    id: 2,
    title: 'Expert\nMedical Team',
    description:
      'Our experienced specialists provide compassionate care using modern medical practices.',
    icon: <FaUserMd size={28} />,
    bg: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Digital\nHealth Records',
    description:
      'Securely access prescriptions, reports, and appointments anytime from anywhere.',
    icon: <FaNotesMedical size={28} />,
    bg: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'Advanced\nDiagnostics',
    description:
      'Accurate testing with cutting-edge technology for faster diagnosis and better treatment.',
    icon: <FaStethoscope size={28} />,
    bg: 'from-violet-500 to-purple-600'
  }
]

const PersonalCard = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background Blur */}
      <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-600 font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Personalized Healthcare
            <span className="text-cyan-600"> Solutions</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500">
            Delivering compassionate healthcare with personalized treatment,
            advanced medical technology, and trusted specialists dedicated to
            improving your wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{
                opacity: 0,
                y: 60
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.15
              }}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-cyan-100 shadow-lg hover:shadow-cyan-200/60 transition-all duration-500"
            >
              {/* Gradient Top */}
              <div className={`h-2 w-full bg-gradient-to-r ${card.bg}`}></div>

              <div className="p-7">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.12
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 250
                  }}
                  className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.bg} text-white shadow-xl`}
                >
                  {card.icon}
                </motion.div>

                <h3 className="text-xl font-bold leading-snug whitespace-pre-line text-slate-800">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-500">
                  {card.description}
                </p>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ x: 5 }}
                  className="mt-7 text-cyan-600 font-semibold flex items-center gap-2"
                >
                  Learn More
                  <span>→</span>
                </motion.button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-100/20 via-transparent to-sky-100/30 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalCard
