import axios from 'axios'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import ServiceCard from '../../components/services/ServiceCard'
import { Helmet } from 'react-helmet-async'

const OurServices = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get('/Services.json')
        setServices(res.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchService()
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-6/12 mx-auto justify-center items-center p-64 ">
        <Box>
          <CircularProgress aria-label="Loading…" />
        </Box>
      </div>
    )
  }

  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Our Services | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-10">
        <div className="w-full px-5 md:px-0 md:max-w-6xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
            Our Medical Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Comprehensive Healthcare
            <span className="text-cyan-600"> Services</span>
            <br />
            You Can Trust
          </h2>

          <p className="mt-6 text-slate-600 leading-8 text-base md:text-lg">
            We provide a complete range of high-quality healthcare services
            designed to meet your medical needs. From preventive care and
            specialist consultations to advanced diagnostics and personalized
            treatment plans, our experienced healthcare professionals are
            committed to delivering compassionate, safe, and patient-centered
            care for every stage of life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
              ✔ Expert Specialists
            </div>

            <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
              ✔ Modern Technology
            </div>

            <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
              ✔ Personalized Treatment
            </div>

            <div className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-medium">
              ✔ 24/7 Patient Support
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-9 py-10">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurServices
