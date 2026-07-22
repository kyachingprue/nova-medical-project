import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about/AboutUs'
import OurServices from '../pages/service/OurServices'
import Appointment from '../pages/service/Appointment'
import Doctors from '../pages/service/Doctors'
import Departments from '../pages/service/Departments'
import EmergencyCare from '../pages/service/EmergencyCare'
import OurTeam from '../pages/about/OurTeam'
import FAQ from '../pages/about/FAQ'
import AllBlogs from '../pages/blog/AllBlogs'
import Gallery from '../pages/page/Gallery'
import NotFound from '../pages/page/NotFound'
import PricingPage from '../pages/page/PricingPage'
import TestimonialPage from '../pages/page/TestimonialPage'
import ContactUs from '../pages/contact/ContactUs'
import BookAppointment from '../pages/page/BookAppoinment'
import BlogDetails from '../pages/blog/BlogDetails'
import ServiceDetails from '../components/services/ServiceDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // About
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/our-team',
        element: <OurTeam />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      // Services
      {
        path: '/services/our-services',
        element: <OurServices />
      },
      {
        path: "/service-card-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: '/services/appointments',
        element: <Appointment />
      },
      {
        path: '/doctors',
        element: <Doctors />
      },
      {
        path: '/departments',
        element: <Departments />
      },
      {
        path: '/services/emergency-care',
        element: <EmergencyCare />
      },
      // Blogs
      {
        path: '/all-blogs',
        element: <AllBlogs />
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />,
        loader: async ({ params }) => {
        const res = await fetch("/medical-blogs-30.json");
        const blogs = await res.json();

        return blogs.find(
         (blog) => blog.id === Number(params.id)
         );
        },
      },
      // Pages
      {
        path: '/services/pricing',
        element: <PricingPage />
      },
      {
        path: '/services/testimonials',
        element: <TestimonialPage />
      },
      {
        path: '/services/gallery',
        element: <Gallery />
      },
      {
        path: '/services/not-found',
        element: <NotFound />
      },
      {
        path: '/book-appoinment',
        element: <BookAppointment />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ]
  }
])

export default router
