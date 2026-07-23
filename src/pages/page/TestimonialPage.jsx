import { Helmet } from "react-helmet-async";
import Testimonials from "../../components/page/Testimonials";


const TestimonialPage = () => {
  return (
    <div>
      <Helmet>
        <title>Testimonial | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <Testimonials />
    </div>
  )
};

export default TestimonialPage;
