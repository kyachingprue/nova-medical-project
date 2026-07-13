import { IoIosCheckmarkCircle } from "react-icons/io";
import backgroundImage from "../../assets/images/background1.jpg"
import doctorImage from "../../assets/images/doctor.avif"
import { BsEmojiSmile } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { HiOutlineUserAdd } from "react-icons/hi";

const WhyChooseUs = () => {
  return (
    <main
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover max-h-full bg-center"
    >
      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-10">
        <div>
          <p className="uppercase text-xl text-blue-100 py-3">
            Why Choose Us ?{' '}
          </p>
          <h2 className="text-4xl font-extrabold text-white pb-6">
            Restoring <span className="text-blue-900">Hope</span>, One <br />{' '}
            Day <span className="text-blue-900">At A Time</span>
          </h2>
          <p className="text-sm md:text-base text-white pb-4">
            Through consistent care and compassionate guidance, we help
            individuals rediscover strength, build resilience, and move forward
            toward a brighter, healthier future at their own pace.
          </p>
          <div className="flex flex-col py-5">
            <div className="flex items-center gap-4 pb-5">
              <IoIosCheckmarkCircle size={24} color="blue" />
              <p className="text-xl font-bold text-white">
                Compassionate & Experienced Professionals
              </p>
            </div>
            <div className="flex items-center gap-4 pb-5">
              <IoIosCheckmarkCircle size={24} color="blue" />
              <p className="text-xl font-bold text-white">
                Compassionate & Experienced Professionals
              </p>
            </div>
            <div className="flex items-center gap-4 pb-5">
              <IoIosCheckmarkCircle size={24} color="blue" />
              <p className="text-xl font-bold text-white">
                Compassionate & Experienced Professionals
              </p>
            </div>
          </div>
          <button className="bg-blue-700 text-white text-lg font-bold py-2 px-6 rounded-full">
            Make An Appointment
          </button>
        </div>
        <div className="w-280 h-124 mx-auto">
          <img
            src={doctorImage}
            alt="Doctor Image"
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          {/* first card */}
          <div className="py-4 px-8 rounded-2xl bg-linear-to-b from-blue-800 to-blue-400">
            <BsEmojiSmile size={36} color="pink" className="mx-auto" />
            <h3 className="text-4xl font-bold text-white text-center py-3">
              100%
            </h3>
            <p className="text-white text-sm text-center">Satisfaction</p>
          </div>
          {/* second card */}
          <div className="py-4 px-8 rounded-2xl bg-linear-to-b from-blue-800 to-blue-400">
            <SlLike size={36} color="pink" className="mx-auto" />
            <h3 className="text-4xl font-bold text-white text-center py-3">
              234%
            </h3>
            <p className="text-white text-sm text-center">Happy Patient</p>
          </div>
          {/* third card */}
          <div className="py-4 px-3 rounded-2xl bg-linear-to-b from-blue-800 to-blue-400">
            <HiOutlineUserAdd size={36} color="pink" className="mx-auto" />
            <h3 className="text-4xl font-bold text-white text-center py-3">
              47%
            </h3>
            <p className="text-white text-center text-sm">Expert Therapist</p>
          </div>
        </div>
      </section>
    </main>
  )
};

export default WhyChooseUs;
