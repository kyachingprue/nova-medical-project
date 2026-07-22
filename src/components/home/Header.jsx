import { FaPlay } from 'react-icons/fa6'
import banner from '../../assets/images/banner-gradient.jpg'
import girlImage from '../../assets/images/doctor-image.png'
import { FaPhone } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaXmark } from 'react-icons/fa6'

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
          <div className="absolute flex gap-5 rounded-2xl top-2 left-0 bg-blue-800 p-4">
            <div className="bg-white rounded-full p-2">
              <FaPhone size={42} />
            </div>
            <div className="flex-row gap-1">
              <p className="text-white text-center">Call us anytime</p>
              <h2 className="text-2xl font-medium text-white">
                (4544)74747474
              </h2>
            </div>
          </div>
          <img
            src={girlImage}
            alt="Girl"
            className="w-full h-full pt-14 relative object-cover"
          />
          <div className="absolute flex flex-col top-88 -right-16 rounded-3xl bg-pink-400 py-3 px-5">
            <h3 className="text-3xl font-bold text-white text-center pb-1">
              4.9 /5
            </h3>
            <p className="text-white text-sm md:text-base text-center">
              Review on Google
            </p>
          </div>
        </div>
        <div>
          <p className="text-blue-600 text-xl font-bold py-3">
            FIND BALANCE, EMBRACE LIFE
          </p>
          <h1 className="hero-title text-4xl md:text-6xl font-black leading-tight tracking-tight text-pink-400">
            Caring for Your <br />{' '}
            <span className=" text-[#1747A6]">Inner</span> Peace
          </h1>
          <div className="w-125 h-0.5 bg-white my-8"></div>
          <p className="text-black/90 text-lg leading-8 max-w-xl">
            Discover clarity, confidence, and emotional wellness through guided
            support that helps you manage stress, heal from within, and grow
            stronger every aspect of your mental health journey.
          </p>
          <div className="flex items-center gap-4 mt-8 ">
            <button className="border-2 border-blue-950 hover:border-cyan-600 text-cyan-900 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-full font-semibold active:scale-95 transition-all duration-300 ">
              Start A Checkup Now
            </button>
            <motion.div
              onClick={() => setIsVideoOpen(true)}
              animate={{
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className=" cursor-pointer bg-red-500 rounded-full p-5 text-white shadow-xl"
            >
              <FaPlay size={20} />
            </motion.div>
          </div>
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
