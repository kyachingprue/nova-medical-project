import axios from "axios";
import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'


const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetchService();
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
    <div className="bg-white">
      <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-9 py-10">
          {services.map((service) => (
            <ServiceDetails key={service.id} service={service}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
