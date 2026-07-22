import { Link } from 'react-router'
import banner from '../../assets/images/medicine.jpg'

const AboutBanner = () => {
  return (
    <section
      className="relative h-60 md:h-80 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      {/* Blur + Dark Overlay */}
      <div className="absolute inset-0 backdrop-blur-[10px] bg-linear-to-r from-blue-700/60 to-amber-500/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-5">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
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
