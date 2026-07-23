import { Helmet } from "react-helmet-async";
import AboutBanner from "../../components/aboutUs/AboutBanner";
import AboutUsPage from "../../components/aboutUs/AboutUsPage";
import HowWeWork from "../../components/home/HowWeWork";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <AboutBanner />
      <AboutUsPage />
      <HowWeWork />
    </div>
  )
}

export default AboutUs;
