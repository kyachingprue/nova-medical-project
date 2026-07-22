import Rating from '@mui/material/Rating'
import { motion } from 'motion/react'
import { Link } from 'react-router'

const ServiceCard = ({ service }) => {
  const { id, image, title, shortTitle, description, doctor, rating } = service

  return (
    <>
      <Link to={`/service-card-details/${id}`}>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="group w-full max-w-sm mx-auto h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 left-4"
            >
              <span className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                {shortTitle}
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col h-65">
            <Link to={`/service-card-details/${id}`}>
              <h2 className="text-2xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600 group-hover:underline">
                {title}
              </h2>
            </Link>

            <p className="mt-3 text-slate-600 leading-7 grow">
              {description.slice(0, 140)}...
            </p>

            {/* Doctor & Rating */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-cyan-100"
                />

                <div>
                  <h4 className="text-sm font-semibold text-slate-700">
                    {doctor.name}
                  </h4>

                  <p className="text-xs text-slate-500">Specialist</p>
                </div>
              </div>

              <Rating value={rating} precision={0.5} readOnly size="small" />
            </div>
          </div>
        </motion.section>
      </Link>
    </>
  )
}

export default ServiceCard
