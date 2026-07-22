import { IoIosCheckmarkCircle } from 'react-icons/io'
import backgroundImage from '../../assets/images/background1.jpg'
import doctorImage from '../../assets/images/doctor.avif'
import { BsEmojiSmile } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import { HiOutlineUserAdd } from 'react-icons/hi'

import { motion } from 'motion/react'

const WhyChooseUs = () => {
  const features = [
    'Compassionate & Experienced Professionals',
    'Compassionate & Experienced Professionals',
    'Compassionate & Experienced Professionals'
  ]

  const stats = [
    {
      icon: <BsEmojiSmile size={36} color="pink" />,
      number: '100%',
      title: 'Satisfaction'
    },
    {
      icon: <SlLike size={36} color="pink" />,
      number: '234%',
      title: 'Happy Patient'
    },
    {
      icon: <HiOutlineUserAdd size={36} color="pink" />,
      number: '47%',
      title: 'Expert Therapist'
    }
  ]

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
      className="
        bg-cover
        bg-center
        overflow-hidden
      "
    >
      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          py-16
          md:py-24
          flex
          flex-col
          lg:flex-row
          items-center
          gap-10
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80
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
          className="
            w-full
            lg:w-1/3
          "
        >
          <p
            className="
            uppercase
            text-lg
            sm:text-xl
            text-blue-100
            py-3
          "
          >
            Why Choose Us ?
          </p>

          <h2
            className="
            text-3xl
            md:text-4xl

            font-extrabold
            text-white
            pb-5
          "
          >
            Restoring{' '}
            <span className="text-blue-900">Hope</span>
            , One
            <br />
            Day{' '}
            <span className="text-blue-900">At A Time</span>
          </h2>

          <p
            className="
            text-sm
            md:text-base
            text-white
            pb-4
            leading-7
          "
          >
            Through consistent care and compassionate guidance, we help
            individuals rediscover strength, build resilience, and move forward
            toward a brighter, healthier future at their own pace.
          </p>

          <div className="flex flex-col py-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.2
                }}
                className="
                  flex
                  items-center
                  gap-4
                  pb-5
                "
              >
                <IoIosCheckmarkCircle size={24} color="blue" />

                <p
                  className="
                  text-base
                  sm:text-xl
                  font-bold
                  text-white
                "
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="
              bg-blue-700
              hover:bg-blue-900
              text-white
              text-lg
              font-bold
              py-2
              px-6
              rounded-full
              transition
            "
          >
            Make An Appointment
          </motion.button>
        </motion.div>

        {/* DOCTOR IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          animate={{
            y: [0, -10, 0]
          }}
          className="
            w-full
            sm:w-112.5
            lg:w-1/3
            h-87.5
            sm:h-125.5
          "
        >
          <img
            src={doctorImage}
            alt="Doctor Image"
            className="
              rounded-3xl
              w-full
              h-full
              object-cover
            "
          />
        </motion.div>

        {/* STAT CARDS */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80
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
          className="
            w-full
            sm:w-75
            lg:w-1/4
            flex
            flex-col
            gap-4
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              transition={{
                type: 'spring'
              }}
              className="
                py-4
                px-8
                rounded-2xl
                bg-linear-to-b
                from-blue-800
                to-blue-400
                shadow-xl
              "
            >
              <div className="flex justify-center">{item.icon}</div>

              <h3
                className="
                text-4xl
                font-bold
                text-white
                text-center
                py-3
              "
              >
                {item.number}
              </h3>

              <p
                className="
                text-white
                text-sm
                text-center
              "
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}

export default WhyChooseUs
