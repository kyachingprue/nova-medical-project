import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import backgroundImage from '../../assets/images/image36.jpg'

const GetAQuote = () => {
  return (
    <main
      className="relative overflow-hidden bg-cover bg-center py-20 lg:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Beautiful Blur Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/75 via-blue-800/45 to-pink-400/40 backdrop-blur-[2px]" />

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-white tracking-[3px] uppercase font-semibold mb-4">
            Get A Quote
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Take <span className="text-amber-300">The First Step</span> Toward A
            <span className="text-amber-300"> Healthier </span>
            Mind.
            <br className="hidden md:block" />
            Join Us Today And Start Your Journey To
            <span className="text-amber-300"> Well-being!</span>
          </h2>
        </div>

        {/* Card */}
        <div className="grid lg:grid-cols-3 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Phone
                  </label>

                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Time
                  </label>

                  <input
                    type="datetime-local"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700 mb-2 block">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 mb-2 block">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us your story..."
                  className="w-full rounded-2xl border border-gray-300 p-5 outline-none resize-none focus:border-blue-600"
                />
              </div>

              <button className="w-full rounded-xl bg-blue-700 py-4 text-white font-semibold transition hover:bg-blue-800 active:scale-95">
                Make An Appointment
              </button>
            </form>
          </div>

          {/* Contact */}
          <div className="bg-linear-to-br from-pink-100 to-pink-200 p-8 lg:p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Need Any Help?
            </h3>

            <p className="text-gray-700 mb-10 leading-7">
              Every small step counts. We're committed to walking beside you
              through difficult moments and helping you achieve lasting mental
              wellness.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-700 rounded-full p-4">
                  <FaPhone className="text-white text-xl" />
                </div>

                <div>
                  <p className="font-semibold text-blue-900">Call Us Anytime</p>

                  <p className="text-gray-700 font-medium">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-700 rounded-full p-4">
                  <IoMdMail className="text-white text-xl" />
                </div>

                <div>
                  <p className="font-semibold text-blue-900">Email Us</p>

                  <p className="text-gray-700 font-medium">example@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-700 rounded-full p-4">
                  <MdLocationOn className="text-white text-xl" />
                </div>

                <div>
                  <p className="font-semibold text-blue-900">Our Location</p>

                  <p className="text-gray-700 font-medium">
                    123 Serenity Lane,
                    <br />
                    Blissfield, CA 90210, US
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GetAQuote
