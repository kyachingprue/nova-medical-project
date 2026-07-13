import AboutMental from "../../components/home/AboutMental";
import Header from "../../components/home/Header";
import HowWeWork from "../../components/home/HowWeWork";
import OurSpecialist from "../../components/home/OurSpecialist";
import PersonalCard from "../../components/home/PersonalCard";
import WhyChooseUs from "../../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Header />
      <PersonalCard />
      <AboutMental />
      <HowWeWork />
      <WhyChooseUs />
      <OurSpecialist/>
    </div>
  );
};

export default Home;
