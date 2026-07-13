import image1 from "../../assets/images/top-image.jpg";
import image2 from "../../assets/images/center-image.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import signature from "../../assets/images/signature.png";

const AboutMental = () => {
  return (
    <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-20 gap-4">
      <div className="flex-1/2 relative h-full">
        <img className="rounded-2xl mx-auto" src={image2} alt="Medical Image" />
        <div className="w-60 h-60 absolute -top-12 left-3 shadow-2xl rounded-full">
          <img
            className="w-full rounded-full border-4 border-white h-full object-cover"
            src={image1}
            alt="About us image"
          />
        </div>
        <div className="absolute bottom-4 right-3 bg-pink-400 rounded-3xl px-7 py-4 shadow-2xl">
          <h3 className="text-2xl text-center font-extrabold text-white">
            10 + Years <br /> <span className="text-xl font-bold">of Experience</span>
          </h3>
        </div>
      </div>
      <div className="flex-1/2">
        <p className="text-lg text-blue-700 uppercase py-3">About Us</p>
        <h3 className="text-4xl font-extrabold text-black pb-4">
          Your Journey To Mental Wellness Starts Here
        </h3>
        <p className="text-sm text-gray-600 pb-4">
          Every small step toward better mental health is a significant
          achievement in our lives. With the right support, each individual can
          find the strength to face challenges, manage stress, and build
          positive habits. We believe that everyone deserves the opportunity to
          grow, thrive, and experience inner peace. Through an empathetic and
          professional approach, we are here to help you discover the best
          solutions for lasting mental and emotional well-being.
        </p>
        <div className="grid grid-cols-2 gap-5 items-center py-5">
          <div className="flex items-center gap-3">
            <IoIosCheckmarkCircle size={24} color="blue" />
            <h4 className="text-xl font-bold text-black">Free Consultation</h4>
          </div>
          <div className="flex items-center gap-3">
            <IoIosCheckmarkCircle size={24} color="blue" />
            <h4 className="text-xl font-bold text-black">Free Consultation</h4>
          </div>
          <div className="flex items-center gap-3">
            <IoIosCheckmarkCircle size={24} color="blue" />
            <h4 className="text-xl font-bold text-black">Free Consultation</h4>
          </div>
          <div className="flex items-center gap-3">
            <IoIosCheckmarkCircle size={24} color="blue" />
            <h4 className="text-xl font-bold text-black">Free Consultation</h4>
          </div>
        </div>
        <p className="text-lg font-medium text-black italic pb-4">
          Healing doesn’t mean the damage never existed; it means the strength
          to rise is greater than the pain
        </p>
        <div className="flex gap-20 items-center ">
          <img src={signature} className="w-40" alt="Signature" />
          <button className="py-2.5 px-4 rounded-md bg-blue-800 text-white text-lg font-bold">
            Read more
          </button>
        </div>
      </div>
    </section>
  )
};

export default AboutMental;
