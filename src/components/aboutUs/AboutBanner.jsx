import { Link } from 'react-router'
import banner from '../../assets/images/about-banner.jpg'

const AboutBanner = () => {
  return (
    <section
      className="relative mt-16 h-80 md:h-96 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      {/* Blur + Dark Overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-5">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            About Us
          </h1>

          <div className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="hover:text-blue-400 transition">
              Homepage
            </Link>

            <span>/</span>

            <p>About Us</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner
