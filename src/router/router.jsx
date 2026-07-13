import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import Services from "../pages/Service/Services";
import Pages from "../pages/page/Pages";
import ContactUs from "../pages/contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/about-us",
        element:<AboutUs/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/pages",
        element: <Pages/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      }
    ]
  }
])

export default router;
