import Rating from '@mui/material/Rating'

const ServiceCard = ({ service }) => {
  const { image, title, shortTitle, description, doctor, rating } = service
  return (
    <section className="w-96 h-full mx-auto bg-blue-200 hover:shadow-2xl transition duration-300">
      <div className="relative ">
        <img
          src={image}
          className="w-full h-full relative object-cover"
          alt="Doctor Image"
        />
        <div className="absolute top-2 left-2">
          <p className="text-white cursor-progress bg-cyan-900 py-3 px-4 shadow-lg rounded-md">
            {shortTitle}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="py-2 text-2xl font-bold text-black hover:text-blue-700 hover:underline">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 pb-4">
          {description.slice(0, 200)}...
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src={doctor.image}
              className="w-8 h-8 rounded-full object-cover border border-white"
              alt="Doctor personal image"
            />
            <p className="text-sm md:text-base text-gray-600">{doctor.name}</p>
          </div>
          {/* Rating */}
          <div>
            <Rating name="read-only" value={rating} readOnly />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard;
