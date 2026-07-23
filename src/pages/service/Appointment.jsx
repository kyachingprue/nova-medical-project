import { Helmet } from 'react-helmet-async'
import GetAQuote from '../../components/home/GetAQuote'
import WhyChooseUs from '../../components/home/WhyChooseUs'

const Appointment = () => {
  return (
    <div>
      <Helmet>
        <title>Appoitnment | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <WhyChooseUs />
      <GetAQuote />
    </div>
  )
}

export default Appointment
