import { NavLink, Link } from "react-router";
import Button from '@mui/material/Button'


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-gray-50">
      <section className="flex justify-between items-center max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-4 text-black">
        <div>
          <Link to="/">
            <button className="active:scale-95 cursor-pointer text-3xl font-medium ">
              NovaDev
            </button>
          </Link>
        </div>
        <div className="flex space-x-7">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pages">Pages</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <div>
          <Button variant="contained">Get Start</Button>
        </div>
      </section>
    </nav>
  )
};

export default Navbar;
