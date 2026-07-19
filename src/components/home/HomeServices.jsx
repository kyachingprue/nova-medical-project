import { useEffect, useState } from 'react'
import ServiceDetails from '../services/ServiceCard'
import axios from 'axios'
import { Button } from '@mui/material'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'

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
    <div className="bg-white">
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
        <div className="text-center">
          <Link to="/our-services">
            <Button
              variant="contained"
              className="text-base! font-bold! normal-case! flex flex-row gap-2"
            >
              See More <FaArrowRightArrowLeft />{' '}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
