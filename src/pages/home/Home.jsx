import { Helmet } from "react-helmet-async";
import AboutMental from "../../components/home/AboutMental";
import Blogs from "../../components/home/Blogs";
import GetAQuote from "../../components/home/GetAQuote";
import Header from "../../components/home/Header";
import HomeServices from "../../components/home/HomeServices";
import HowWeWork from "../../components/home/HowWeWork";
import OurSpecialist from "../../components/home/OurSpecialist";
import PersonalCard from "../../components/home/PersonalCard";
import WhyChooseUs from "../../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet />
      <title>Home | Nova MediCare</title>

      <meta
        name="description"
        content="Welcome to MediCare. Book appointments with experienced doctors and receive quality healthcare services."
      />

      <meta
        name="keywords"
        content="doctor, hospital, medical, healthcare, appointment"
      />
      <Header />
      <PersonalCard />
      <AboutMental />
      <HowWeWork />
      <HomeServices />
      <WhyChooseUs />
      <OurSpecialist />
      <GetAQuote />
      <Blogs />
    </div>
  )
};

export default Home;
