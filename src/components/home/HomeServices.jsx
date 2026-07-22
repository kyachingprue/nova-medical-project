import { useEffect, useState } from 'react'
import ServiceDetails from '../services/ServiceCard'
import axios from 'axios'
import { Button } from '@mui/material'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'
import {motion} from 'motion/react'

const HomeServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    try {
      const fetchService = async () => {
        const res = await axios.get('/Services.json')
        setServices(res.data)
      }
      fetchService()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-20">
        <div className="py-10 w-full mx-auto">
          <p className="text-xl uppercase font-bold text-blue-700 text-center py-3">
            Our Services
          </p>
          <h2 className="text-5xl text-center font-extrabold text-black">
            Breaking Stigmas, Building Strength
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-10">
          {services.slice(0, 6).map(service => (
            <ServiceDetails key={service.id} service={service} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/services/our-services">
            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <Button
                variant="contained"
                endIcon={
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FaArrowRightArrowLeft />
                  </motion.span>
                }
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '999px',
                  background: '#0891b2',
                  boxShadow: '0 10px 25px rgba(8,145,178,0.25)',
                  transition: 'all .3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #0891b2, #06b6d4)',
                    boxShadow: '0 15px 35px rgba(8,145,178,0.35)'
                  }
                }}
              >
                See More
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
