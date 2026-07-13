import { FaBook } from "react-icons/fa";


const PersonalCard = () => {
  return (
    <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 py-12">
      {/* first card */}
      <div className="bg-pink-500 rounded-2xl p-4">
        <div className="flex flex-col items-center md:flex-row gap-3 pb-5">
          <FaBook size={29} />
          <h3 className="text-white font-semibold">
            Personalized <br /> Wellness Plans
          </h3>
        </div>
        <p className="text-white text-sm pt-3">
          Tailored guidance crafted to meet your unique needs and goals
          effectively.
        </p>
      </div>
      {/* second card */}
      <div className="bg-pink-500 rounded-2xl p-4">
        <div className="flex flex-col items-center md:flex-row gap-3 pb-5">
          <FaBook size={29} />
          <h3 className="text-white font-semibold">
            Personalized <br /> Wellness Plans
          </h3>
        </div>
        <p className="text-white text-sm pt-3">
          Tailored guidance crafted to meet your unique needs and goals
          effectively.
        </p>
      </div>
      {/* third card */}
      <div className="bg-pink-500 rounded-2xl p-4">
        <div className="flex flex-col items-center md:flex-row gap-3 pb-5">
          <FaBook size={29} />
          <h3 className="text-white font-semibold">
            Personalized <br /> Wellness Plans
          </h3>
        </div>
        <p className="text-white text-sm pt-3">
          Tailored guidance crafted to meet your unique needs and goals
          effectively.
        </p>
      </div>
      {/* fourth card */}
      <div className="bg-pink-500 rounded-2xl p-4">
        <div className="flex flex-col items-center md:flex-row gap-3 pb-5">
          <FaBook size={29} />
          <h3 className="text-white font-semibold">
            Personalized <br /> Wellness Plans
          </h3>
        </div>
        <p className="text-white text-sm pt-3">
          Tailored guidance crafted to meet your unique needs and goals
          effectively.
        </p>
      </div>
    </div>
  )
};

export default PersonalCard;
