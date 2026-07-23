import { Helmet } from "react-helmet-async";
import FAQPage from "../../components/aboutUs/FAQPage";


const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>FAQ | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <FAQPage />
    </div>
  )
};

export default FAQ;
