import { Helmet } from "react-helmet-async";
import Pricing from "../../components/page/Pricing";


const PricingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Pricing | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <Pricing />
    </div>
  )
};

export default PricingPage;
