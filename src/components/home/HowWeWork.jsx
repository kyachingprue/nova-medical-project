import backgroundGradient from "../../assets/images/gradient.jpg"

const HowWeWork = () => {
  return (
    <main  style={{ backgroundImage: `url(${backgroundGradient})` }}>
      <section className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-10">
        <section className="flex border-b border-blue-400 justify-between items-center gap-4 flex-col lg:flex-row pb-14 pt-12">
          <div className="flex-1/2">
            <p className="text-lg font-bold uppercase text-blue-900 py-3">
              How We Work
            </p>
            <h3 className="text-4xl font-extrabold text-black pb-5">
              Here For Your{' '}
              <span className="text-blue-600">
                Health, <br /> Here
              </span>{' '}
              For Your Heart
            </h3>
          </div>
          <div className="flex-1/2 flex flex-col lg:pl-24 gap-4">
            <p className="text-sm lg:text-base text-gray-600 py-3">
              We offer compassionate care, combining physical and <br />{' '}
              emotional support to help you thrive in every aspect.
            </p>
            <button className="bg-blue-700 w-48 text-white text-lg text-medium py-2 px-4 rounded-full">
              Get consult now
            </button>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 ">
          {/* card 1 */}
          <div className="relative">
            <div className="absolute -top-6 left-5">
              <h3 className="text-5xl font-extrabold text-blue-900/35">01</h3>
            </div>
            <h2 className="text-3xl relative font-bold text-black pb-4">
              Listen & Understand
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Your wellness journey matters. We’re dedicated to supporting both
              your mental clarity and emotional strength every step forward.
            </p>
          </div>
          {/* card 2 */}
          <div className="relative">
            <div className="absolute -top-6 left-5">
              <h3 className="text-5xl font-extrabold text-blue-900/35">02</h3>
            </div>
            <h2 className="text-3xl relative font-bold text-black pb-4">
              Listen & Understand
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Your wellness journey matters. We’re dedicated to supporting both
              your mental clarity and emotional strength every step forward.
            </p>
          </div>
          {/* card 3 */}
          <div className="relative">
            <div className="absolute -top-6 left-5">
              <h3 className="text-5xl font-extrabold text-blue-900/35">03</h3>
            </div>
            <h2 className="text-3xl relative font-bold text-black pb-4">
              Listen & Understand
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Your wellness journey matters. We’re dedicated to supporting both
              your mental clarity and emotional strength every step forward.
            </p>
          </div>
        </section>
      </section>
    </main>
  )
};

export default HowWeWork;
