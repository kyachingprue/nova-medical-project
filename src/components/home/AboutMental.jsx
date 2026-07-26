import image1 from "../../assets/images/top-image.jpg";
import image2 from "../../assets/images/center-image.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import signature from "../../assets/images/signature.png";
import { Button } from "@mui/material";
import {motion} from "motion/react"

const AboutMental = () => {
  return (
    <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-20 gap-4">
      <div className="flex-1/2 relative h-full">
        <img
          className="rounded-2xl mx-auto px-3 md:px-0"
          src={image2}
          alt="Medical Image"
        />
        <div className="w-60 h-60 absolute hidden md:block -top-12 left-3 shadow-2xl rounded-full">
          <img
            className="w-full rounded-full border-4 border-white h-full object-cover"
            src={image1}
            alt="About us image"
          />
        </div>
        <div className="absolute hidden md:block bottom-4 right-3 bg-pink-400 rounded-3xl px-7 py-4 shadow-2xl">
          <h3 className="text-2xl text-center font-extrabold text-white">
            10 + Years <br />{' '}
            <span className="text-xl font-bold">of Experience</span>
          </h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="flex-1/2 w-full px-4"
      >
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-blue-700 uppercase py-3"
        >
          About Us
        </motion.p>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-black pb-4 leading-tight"
        >
          Your Journey To Mental Wellness Starts Here
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-600 pb-4 leading-7"
        >
          Every small step toward better mental health is a significant
          achievement in our lives. With the right support, each individual can
          find the strength to face challenges, manage stress, and build
          positive habits. We believe that everyone deserves the opportunity to
          grow, thrive, and experience inner peace. Through an empathetic and
          professional approach, we are here to help you discover the best
          solutions for lasting mental and emotional well-being.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center py-5"
        >
          {[
            'Free Consultation',
            'Free Consultation',
            'Free Consultation',
            'Free Consultation'
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <IoIosCheckmarkCircle size={24} color="blue" />
              <h4 className="text-lg sm:text-xl font-bold text-black">
                {item}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg font-medium text-black italic pb-6"
        >
          Healing doesn’t mean the damage never existed; it means the strength
          to rise is greater than the pain.
        </motion.p>

        {/* Signature + Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-20"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={signature}
            className="w-32 sm:w-40"
            alt="Signature"
          />

          <Button variant="contained">Read More</Button>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default AboutMental;
