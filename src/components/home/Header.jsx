import banner from "../../assets/images/banner-gradient.jpg";
import girlImage from "../../assets/images/banner-girl.png"
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <section className="flex flex-col items-center justify-center h-full md:flex-row md:justify-between max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div>
          <p className="text-blue-600 text-xl font-bold py-3">
            FIND BALANCE, EMBRACE LIFE
          </p>
          <h1 className="hero-title text-4xl md:text-6xl font-black leading-tight tracking-tight text-pink-400">
            Caring for Your <br />{' '}
            <span className=" text-[#1747A6]">Inner</span> Peace
          </h1>
          <div className="w-96 h-0.5 bg-blue-300 my-8"></div>
          <p className="text-black/90 text-lg leading-8 max-w-xl">
            Discover clarity, confidence, and emotional wellness through guided
            support that helps you manage stress, heal from within, and grow
            stronger every aspect of your mental health journey.
          </p>
          <div className="flex items-center gap-4 mt-8 ">
            <button className="text-md text-white font-semibold py-2 px-4 rounded-full bg-blue-700">
              Start A Checkup Now
            </button>
            <p>video Icon</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute flex gap-5 rounded-2xl top-8 right-0 bg-blue-800 p-4">
            <div className="bg-white rounded-full p-2">
              <FaPhone size={42} />
            </div>
            <div className="flex-row gap-1">
              <p className="text-white text-center">Call us anytime</p>
              <h2 className="text-2xl font-medium text-white">
                (4544)74747474
              </h2>
            </div>
          </div>
          <img
            src={girlImage}
            alt="Girl"
            className="w-full h-full relative object-cover"
          />
          <div className="absolute flex flex-col top-70 -left-15 rounded-3xl bg-pink-700 py-3 px-5">
            <h3 className="text-2xl font-medium text-white text-center">
              4.9 /5
            </h3>
            <p className="text-white text-sm text-center">Review on Google</p>
          </div>
        </div>
      </section>
    </header>
  )
};

export default Header;
