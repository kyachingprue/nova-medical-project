import { HeartPulse, Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-linear-to-br from-sky-50 via-white to-cyan-100 px-6">
      <Helmet>
        <title>404 | MediCare</title>

        <meta
          name="description"
          content="Learn about our experienced doctors, healthcare services, and our commitment to patient care."
        />
      </Helmet>
      <div className="max-w-2xl text-center">
        {/* Medical Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-cyan-100 flex items-center justify-center animate-pulse shadow-xl">
            <HeartPulse size={58} className="text-cyan-600 animate-bounce" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-cyan-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Patient Record Not Found
        </h2>

        <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          The page you're looking for may have been moved, removed, or never
          existed. Don't worry—our healthcare team is here to guide you back to
          safety.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Decorative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-cyan-100">
            <div className="text-4xl mb-3">🩺</div>
            <h3 className="font-bold text-gray-800">Health Check</h3>
            <p className="text-sm text-gray-500 mt-2">
              Continue exploring our medical services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-cyan-100">
            <div className="text-4xl mb-3">💊</div>
            <h3 className="font-bold text-gray-800">Find Doctors</h3>
            <p className="text-sm text-gray-500 mt-2">
              Search experienced healthcare specialists.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-cyan-100">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="font-bold text-gray-800">Emergency Help</h3>
            <p className="text-sm text-gray-500 mt-2">
              Need assistance? Contact our support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default NotFound;
