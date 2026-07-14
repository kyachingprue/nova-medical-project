import { FaPhone } from "react-icons/fa";
import backgroundImage from "../../assets/images/image36.jpg"
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const GetAQuote = () => {
  return (
    <main
      className="relative bg-cover h-screen mt-20 mb-56 bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-800/50 to-pink-100/70"></div>

      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className="absolute top-6 left-77">
          <p className="text-lg font-bold text-center text-white py-5">
            GET A QUOTE
          </p>
          <h2 className="text-4xl font-extrabold text-white text-center">
            Take <span className="text-amber-200">The first step</span> toward a{' '}
            <span className="text-amber-200">healthier</span> mind. <br /> Join
            us today and start your journey to{' '}
            <span className="text-amber-200">
              well-
              <br /> being!
            </span>
          </h2>
        </div>
        <div className="flex absolute w-260 rounded-4xl shadow-2xl top-80 left-60 flex-col lg:flex-row">
          <div className="bg-white flex-1/2 rounded-tl-2xl rounded-bl-2xl p-6 mx-auto">
            <form>
              <div className="flex flex-col py-3 md:flex-row gap-5 items-center">
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name here"
                    className="outline-none text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="outline-none text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col py-3 md:flex-row gap-5 items-center">
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="Your phone number"
                    className="outline-none text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Date
                  </label>
                  <input
                    type="date"
                    className="outline-none w-full text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 py-3 items-center">
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Time
                  </label>
                  <input
                    type="datetime-local"
                    className="outline-none text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
                <div className="flex flex-1/2 w-full flex-col gap-2">
                  <label className="text-xl font-semibold text-black">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your subject"
                    className="outline-none text-gray-600 rounded-full py-2 px-4 border border-gray-400"
                  />
                </div>
              </div>
              <div className="py-3 flex flex-col gap-2">
                <label className="text-black text-xl font-semibold">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Tell us your story"
                  className="w-full h-24 py-2 px-4 rounded-2xl border border-gray-400 outline-none"
                />
              </div>
              <button className="w-full py-2 text-center rounded-md active:scale-95 text-lg font-semibold text-white bg-blue-700 my-4">
                Make An Appointment
              </button>
            </form>
          </div>
          <div className="bg-pink-200 rounded-tr-2xl rounded-br-2xl flex-1/2 px-4 pt-5">
            <h3 className="text-3xl font-bold text-black py-5">
              Need Any Help ? Get In Touch With Us
            </h3>
            <p className="text-gray-600 pb-6">
              Every small step counts. We’re committed to walking with you
              through difficult moments, encouraging progress, and nurturing
              your journey toward lasting mental and emotional recovery.
            </p>
            <div className="flex flex-row items-center pb-5 gap-5">
              <FaPhone
                color="white"
                className="bg-blue-700 w-14 h-14 rounded-full p-3"
              />
              <div>
                <p className="font-bold text-blue-900">Call us anytime</p>
                <p className="text-lg font-bold text-gray-700">
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center pb-5 gap-5">
              <IoMdMail
                color="white"
                className="bg-blue-700 w-14 h-14 rounded-full p-3"
              />
              <div>
                <p className="font-bold text-blue-900">Email us</p>
                <p className="text-lg font-bold text-gray-700">
                  example@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <MdLocationOn
                color="white"
                className="bg-blue-700 w-14 h-14 rounded-full p-3"
              />
              <div>
                <p className="font-bold text-blue-900">Our location</p>
                <p className="text-lg font-bold text-gray-700">
                  123 Serenity Lane, <br /> Blissfield, CA 90210, US.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default GetAQuote;
