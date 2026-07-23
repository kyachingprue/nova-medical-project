import { Helmet } from "react-helmet-async";
import OurSpecialist from "../../components/home/OurSpecialist";


const OurTeam = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Team | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <OurSpecialist />
    </div>
  )
};

export default OurTeam;
