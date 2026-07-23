import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Rating from "@mui/material/Rating";

import {
  FaUserMd,
  FaClock,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

import {
  MdVerified,
  MdCalendarMonth,
} from "react-icons/md";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { id } = useParams()

  const [service, setService] = useState(null)

  useEffect(() => {
    fetch('/Services.json')
      .then(res => res.json())
      .then(data => {
        const singleService = data.find(item => item.id === Number(id))

        setService(singleService)
      })
  }, [id])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-cyan-600"></span>
      </div>
    )
  }

  const {
    image,
    title,
    shortTitle,
    description,
    doctor,
    duration,
    consultationFee,
    availability,
    rating,
    reviews,
    location,
    phone,
    email,
    languages,
    features,
    treatments,
    isAvailable,
    appointmentRequired
  } = service

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="max-w-7xl mx-auto px-4 md:px-32 py-12"
    >
      <Helmet>
        <title>{title} | MediCare Service</title>

        <meta name="description" content={description} />
      </Helmet>
      {/* Hero Image */}

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-3xl shadow-xl"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-72 md:h-112.5 lg:h-130 object-cover"
        />
      </motion.div>

      {/* Category */}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold shadow">
          {shortTitle}
        </span>

        <span
          className={`px-5 py-2 rounded-full font-semibold ${
            isAvailable
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {isAvailable ? 'Available Today' : 'Unavailable'}
        </span>
      </div>

      {/* Title */}

      <motion.h1
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
      >
        {title}
      </motion.h1>

      {/* Description */}

      <p className="mt-6 text-slate-600 leading-8 text-base md:text-lg">
        {description}
      </p>

      {/* Doctor Card */}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="mt-12 rounded-3xl bg-white border border-slate-200 shadow-lg p-6"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Doctor Image */}

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-100"
          />

          {/* Doctor Info */}

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaUserMd className="text-cyan-600 text-xl" />

              <h2 className="text-2xl font-bold text-slate-800">
                {doctor.name}
              </h2>
            </div>

            <p className="mt-2 text-cyan-600 font-semibold">{doctor.role}</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Department</p>

                <h3 className="font-semibold text-slate-700">
                  {doctor.category}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Qualification</p>

                <h3 className="font-semibold text-slate-700">
                  {doctor.qualification}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Experience</p>

                <h3 className="font-semibold text-slate-700">
                  {doctor.experience}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Reviews</p>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Rating
                    value={rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />

                  <span className="font-semibold">({reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* ================= Service Information ================= */}

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Service Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Consultation Fee */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FaMoneyBillWave className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Consultation Fee</p>

            <h3 className="mt-2 text-2xl font-bold text-slate-800">
              ${consultationFee}
            </h3>
          </motion.div>

          {/* Duration */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FaClock className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Consultation Duration</p>

            <h3 className="mt-2 text-xl font-bold text-slate-800">
              {duration}
            </h3>
          </motion.div>

          {/* Availability */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <MdCalendarMonth className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Available Time</p>

            <h3 className="mt-2 text-lg font-semibold text-slate-800 leading-7">
              {availability}
            </h3>
          </motion.div>

          {/* Location */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Hospital Location</p>

            <h3 className="mt-2 text-lg font-semibold text-slate-800">
              {location}
            </h3>
          </motion.div>

          {/* Phone */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Contact Number</p>

            <a
              href={`tel:${phone}`}
              className="mt-2 block text-lg font-semibold text-slate-800 hover:text-cyan-600 transition"
            >
              {phone}
            </a>
          </motion.div>

          {/* Email */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FaEnvelope className="text-cyan-600 text-2xl" />
            </div>

            <p className="text-gray-500 text-sm">Email Address</p>

            <a
              href={`mailto:${email}`}
              className="mt-2 block break-all text-lg font-semibold text-slate-800 hover:text-cyan-600 transition"
            >
              {email}
            </a>
          </motion.div>
        </div>
      </div>
      {/* ================= Features & Treatments ================= */}

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Features */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-md p-7"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Service Features
          </h2>

          <div className="space-y-4">
            {features.map(feature => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 hover:bg-cyan-50 transition"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center">
                  <MdVerified className="text-white text-lg" />
                </div>

                <p className="font-medium text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Treatments */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-md p-7"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Treatments & Services
          </h2>

          <div className="space-y-4">
            {treatments.map(treatment => (
              <div
                key={treatment}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 hover:bg-cyan-50 transition"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center">
                  <MdVerified className="text-white text-lg" />
                </div>

                <p className="font-medium text-slate-700">{treatment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= Languages ================= */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-md p-7"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Languages Spoken
        </h2>

        <div className="flex flex-wrap gap-4">
          {languages.map(language => (
            <span
              key={language}
              className="px-5 py-3 rounded-full bg-cyan-50 text-cyan-700 font-semibold hover:bg-cyan-600 hover:text-white transition"
            >
              {language}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ================= About Service ================= */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-md p-8"
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          About This Service
        </h2>

        <div className="space-y-6 text-slate-600 leading-8">
          <p>{description}</p>

          <p>
            Our healthcare team combines years of clinical experience with
            advanced medical technology to provide accurate diagnosis, effective
            treatment plans, and compassionate patient care. Every consultation
            is designed to address your concerns while promoting long-term
            health and wellness.
          </p>

          <p>
            We emphasize preventive care, clear communication, and continuous
            follow-up to help patients make informed decisions about their
            health. Whether you need a routine checkup or specialized treatment,
            our team is committed to delivering safe, reliable, and personalized
            medical services.
          </p>
        </div>
      </motion.div>
      {/* ================= Appointment CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-14 rounded-3xl bg-linear-to-r from-cyan-600 to-sky-600 p-8 md:p-10 text-white shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Book Your Appointment Today
            </h2>

            <p className="mt-4 max-w-2xl text-cyan-50 leading-8">
              Receive expert medical consultation from our experienced
              healthcare professionals. Schedule your appointment today and take
              the next step toward better health and well-being.
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <span
                className={`px-5 py-3 rounded-full font-semibold ${
                  appointmentRequired
                    ? 'bg-white text-cyan-700'
                    : 'bg-green-500 text-white'
                }`}
              >
                {appointmentRequired
                  ? 'Appointment Required'
                  : 'Walk-in Available'}
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500 font-semibold">
                {availability}
              </span>
            </div>
          </div>

          {/* Right */}

          <Link to="/book-appoinment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-2xl bg-white text-cyan-700 font-bold text-lg shadow-lg hover:bg-slate-100 transition"
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* ================= Back Button ================= */}

      <div className="mt-12 flex justify-center">
        <Link to="/services/our-services">
          <motion.button
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white px-7 py-3 font-semibold shadow-lg transition"
          >
            <FaArrowLeft />
            Back to Services
          </motion.button>
        </Link>
      </div>
    </motion.section>
  )
}

export default ServiceDetails
