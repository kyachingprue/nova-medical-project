import { NavLink , Link} from "react-router";


const Navbar = () => {
  return (
    <nav className="bg-gray-50">
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
          <button className="py-2 px-4 rounded bg-amber-900 text-white active:scale-95 cursor-pointer">
            Get Started
          </button>
        </div>
      </section>
    </nav>
  )
};

export default Navbar;
