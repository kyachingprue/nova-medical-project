import { SlSocialFacebook, SlSocialGithub } from "react-icons/sl";
import doctor1 from "../../assets/images/doctor1.avif"
import doctor2 from "../../assets/images/doctor2.jpg";
import doctor3 from "../../assets/images/doctor3.jpg";
import doctor4 from "../../assets/images/doctor4.jpg";
import doctor5 from "../../assets/images/doctor5.jpg";
import doctor6 from "../../assets/images/doctor6.avif";
import doctor7 from "../../assets/images/doctor7.jpg";
import doctor8 from "../../assets/images/doctor8.jpg"
import { TiSocialLinkedin } from "react-icons/ti";

const OurSpecialist = () => {
  return (
    <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto bg-white pb-20">
      <div className="w-6/12 mx-auto py-8">
        <p className="text-xl text-center font-bold uppercase text-blue-800">
          Our Specialist
        </p>
        <h3 className="text-5xl font-extrabold text-black py-4 text-center">
          Meet Our Senior <br /> Therapist
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 py-12 mx-auto">
        {/* image 1 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor1}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center py-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                size={28}
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                size={28}
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 2 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor2}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center py-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                size={28}
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                size={28}
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 3 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor3}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white py-1 text-center text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row ">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                size={28}
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                size={28}
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 4 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor4}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center py-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                size={28}
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                size={28}
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 5 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor5}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center p-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                size={28}
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                size={28}
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 6 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor6}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center py-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 7 */}
        <div className="w-68 h-80 rounded-3xl relative">
          <img
            src={doctor7}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center py-1 text-sm">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* image 8 */}
        <div className="w-68 h-80 relative">
          <img
            src={doctor8}
            alt="Doctor image"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="bg-fuchsia-900/90 px-4 rounded-2xl absolute bottom-2 right-9 w-50 h-30">
            <h3 className="text-2xl font-bold text-white text-center pt-2">
              Ubied Uma
            </h3>
            <p className="text-white text-center text-sm py-1">Psychologist</p>
            <div className="flex items-center justify-center gap-3 flex-row">
              <SlSocialFacebook
                color="white"
                className="bg-blue-500 rounded-full p-1.5 w-10 h-10"
              />
              <TiSocialLinkedin
                color="white"
                className="bg-blue-800 rounded-full p-1.5 w-10 h-10"
              />
              <SlSocialGithub
                color="black"
                className="bg-white rounded-full p-1.5 w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default OurSpecialist;
