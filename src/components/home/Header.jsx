import { FaPlay } from 'react-icons/fa6'
import banner from '../../assets/images/background-linear.jpg'
import girlImage from '../../assets/images/doctor-image.png'
import { FaPhone } from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, animate } from 'motion/react'
import { FaXmark } from 'react-icons/fa6'


const CountUp = ({ from = 0, to, duration = 2, suffix = '', decimals = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(value)
      }
    })

    return () => controls.stop()
  }, [isInView, from, to, duration])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const Header = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        setIsVideoOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])
  return (
    <header
      className="pt-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <section className="flex flex-col items-center justify-center h-full md:flex-row md:justify-between max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className="relative">
          {/* Phone Card */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute top-3 left-2 sm:left-4 lg:left-0 z-20 flex items-center gap-3 rounded-2xl bg-blue-800 px-3 py-3 md:px-5 md:py-4 shadow-xl"
          >
            <div className="bg-white rounded-full p-2 md:p-3">
              <FaPhone className="text-xl md:text-3xl" />
            </div>

            <div>
              <p className="text-white text-xs md:text-sm">Call us anytime</p>

              <h2 className="text-sm md:text-xl font-semibold text-white">
                (4544)74747474
              </h2>
            </div>
          </motion.div>

          {/* Doctor Image */}

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={girlImage}
            alt="Girl"
            className="w-full h-auto pt-16 object-cover"
          />

          {/* Review Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-50 right-2 md:right-4 lg:-right-12 bg-pink-500 rounded-3xl px-4 py-3 shadow-xl"
          >
            <h3 className="text-white text-xl md:text-3xl font-bold text-center">
              <CountUp from={0} to={4.9} decimals={1} />
              /5
            </h3>

            <p className="text-white text-xs md:text-base text-center">
              Review on Google
            </p>
          </motion.div>
        </div>
        <div className="w-full max-w-xl lg:max-w-2xl mt-10 md:mt-0 text-center md:text-left px-4">
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-widest uppercase"
          >
            FIND BALANCE, EMBRACE LIFE
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-title mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            <span className="text-pink-400">Caring for Your</span>
            <br />
            <span className="text-blue-200">Inner</span>{' '}
            <span className="text-pink-400">Peace</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-white my-6 md:my-8 w-40 sm:w-56 md:w-72 lg:w-96 mx-auto md:mx-0"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg leading-7 md:leading-8 max-w-xl mx-auto md:mx-0"
          >
            Discover clarity, confidence, and emotional wellness through guided
            support that helps you manage stress, heal from within, and grow
            stronger in every aspect of your mental health journey.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-5 mt-8"
          >
            <button className="w-full sm:w-auto border-2 border-blue-100 hover:border-cyan-500 hover:bg-cyan-200 hover:text-black text-cyan-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95">
              Start A Checkup Now
            </button>

            <motion.button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              animate={{
                scale: [1, 1.12, 1]
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity
              }}
              whileHover={{
                scale: 1.15
              }}
              whileTap={{
                scale: 0.9
              }}
              className="cursor-pointer bg-red-500 hover:bg-red-600 rounded-full p-4 sm:p-5 mb-9 md:mb-0 text-white shadow-xl"
            >
              <FaPlay className="text-lg sm:text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          >
            {/* Close Button */}

            <motion.button
              whileHover={{
                scale: 1.1
              }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-5 right-5 bg-white text-black rounded-full p-3"
            >
              <FaXmark size={25} />
            </motion.button>

            {/* Video Container */}

            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.7,
                opacity: 0
              }}
              transition={{
                duration: 0.4
              }}
              className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/74DWwSxsVSs?autoplay=1"
                title="Medical Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
