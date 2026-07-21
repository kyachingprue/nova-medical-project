import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";


const AboutUsPage = () => {
  return (
    <section className="bg-white">
      <main className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-24">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div>
            <img
              src="https://i.ibb.co.com/9HwmTNMC/microsoft-copilot-tx-Zv4-HQJRp-E-unsplash.jpg"
              className="w-150 h-130 object-cover rounded-lg"
              alt="About Us image"
            />
          </div>
          <div className="pl-6">
            <p className="text-xl font-semibold text-blue-600 uppercase py-3">
              About us
            </p>
            <h3 className="text-5xl font-bold text-black py-3">
              Because Your Mental <br /> Health Matters
            </h3>
            <div className="flex flex-col py-5">
              <div className="flex items-center gap-1 pb-3">
                <MdOutlineNavigateNext size={32} />
                <p className="text-black text-sm md:text-base">
                  Prioritizing well-being helps you thrive emotionally,
                  socially, and personally every day.
                </p>
              </div>
              <div className="flex items-center gap-1 pb-3">
                <MdOutlineNavigateNext size={32} />
                <p className="text-black text-sm md:text-base">
                  Strong minds build strong lives; support and care create
                  lasting peace.
                </p>
              </div>
              <div className="flex items-center gap-1 pb-3">
                <MdOutlineNavigateNext size={32} />
                <p className="text-black text-sm md:text-base">
                  Inner peace starts with awareness, acceptance, and support
                  when it's needed most.
                </p>
              </div>
              <div className="flex items-center gap-1 pb-3">
                <MdOutlineNavigateNext size={32} />
                <p className="text-black text-sm md:text-base">
                  Emotional strength shapes how we live, connect, and move
                  forward confidently.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-800 rounded-2xl p-3">
            <h3 className="text-4xl font-bold text-white py-3">
              Together, We <br /> overcome
            </h3>
            <div className="flex flex-col py-5">
              <div className="flex items-center gap-3">
                <IoIosCheckmarkCircle color="white" size={20} />
                <p className="text-sm md:text-base text-white">
                  Free Consultation
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoIosCheckmarkCircle color="white" size={20} />
                <p className="text-sm md:text-base text-white">
                  Mental Satisfaction
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoIosCheckmarkCircle color="white" size={20} />
                <p className="text-sm md:text-base text-white">
                  Emergency Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
};

export default AboutUsPage;
