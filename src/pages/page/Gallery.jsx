import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiCamera,
  FiImage,
  FiHeart,
  FiUsers,
  FiX,
  FiSearch,
} from "react-icons/fi";

import backgroundGradient from "../../assets/images/banner-gradient.jpg";

// ======================================================
// Gallery Data
// ======================================================

const galleryItems = [
  {
    id: 1,
    category: "Hospital",
    title: "Modern Hospital Lobby",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0c?w=900&q=80",
  },
  {
    id: 2,
    category: "Doctors",
    title: "Expert Medical Team",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80",
  },
  {
    id: 3,
    category: "Patients",
    title: "Patient Consultation",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
  },
  {
    id: 4,
    category: "Laboratory",
    title: "Advanced Laboratory",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=900&q=80",
  },
  {
    id: 5,
    category: "Hospital",
    title: "Emergency Department",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&q=80",
  },
  {
    id: 6,
    category: "Doctors",
    title: "Medical Specialist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80",
  },
  {
    id: 7,
    category: "Patients",
    title: "Family Healthcare",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900&q=80",
  },
  {
    id: 8,
    category: "Laboratory",
    title: "Medical Research",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80",
  },
];

// ======================================================
// Categories
// ======================================================

const categories = [
  "All",
  "Hospital",
  "Doctors",
  "Patients",
  "Laboratory",
];

// ======================================================
// Statistics
// ======================================================

const stats = [
  {
    icon: FiImage,
    number: "500+",
    title: "Medical Photos",
  },
  {
    icon: FiUsers,
    number: "120+",
    title: "Healthcare Experts",
  },
  {
    icon: FiHeart,
    number: "10K+",
    title: "Happy Patients",
  },
];

// ======================================================
// Motion Variants
// ======================================================

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// ======================================================
// Component
// ======================================================

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: `url(${backgroundGradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      {/* Floating Decorations */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-12 top-40 h-8 w-8 rounded-full bg-blue-500/30"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute right-16 top-28 h-6 w-6 rounded-full bg-cyan-500/40"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* ======================================================
                        HERO SECTION
        ======================================================= */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg"
          >
            <FiCamera className="text-blue-600" />
            Medical Gallery
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Explore Our
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Healthcare Journey
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Take a closer look at our modern hospital, experienced
            medical professionals, advanced laboratories, and the
            compassionate care we provide every day.
          </motion.p>
        </motion.section>

        {/* ======================================================
                        STATISTICS
        ======================================================= */}

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  <div>

                    <h3 className="text-4xl font-black text-slate-900">
                      {stat.number}
                    </h3>

                    <p className="mt-1 text-slate-600">
                      {stat.title}
                    </p>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* ======================================================
                    CATEGORY FILTERS
        ======================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (

            <motion.button
              key={category}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 shadow-md

                ${
                  activeCategory === category
                    ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }
              `}
            >
              {category}
            </motion.button>

          ))}
        </motion.section>

        {/* ======================================================
                        GALLERY GRID
        ======================================================= */}

        <div className="mt-20">
                  <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="wait">
            {filteredGallery.map((image) => (
              <motion.div
                key={image.id}
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <motion.img
                    whileHover={{
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    src={image.image}
                    alt={image.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Search Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => setSelectedImage(image)}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-xl transition-all duration-500 group-hover:opacity-100"
                  >
                    <FiSearch size={24} />
                  </motion.button>

                </div>

                {/* Content */}
                <div className="relative p-6">

                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {image.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {image.title}
                  </h3>

                  <motion.button
                    whileHover={{
                      x: 6,
                    }}
                    className="mt-5 flex items-center gap-2 font-semibold text-blue-600"
                  >
                    View Photo →

                  </motion.button>

                </div>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-200/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* ======================================================
                    FEATURED GALLERY SECTION
        ======================================================= */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-[40px] border border-white/60 bg-white/80 p-10 shadow-2xl backdrop-blur-xl lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Excellence in Healthcare
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                Experience Our
                <span className="text-blue-600">
                  {" "}Modern Medical Facilities
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our hospital combines compassionate healthcare with
                advanced medical technology, creating a comfortable
                and professional environment for every patient.
              </p>

            </div>

            {/* Right */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0c?w=1200&q=80"
                alt="Hospital"
                className="h-87.5 w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                  State-of-the-Art Hospital
                </span>

              </div>

            </motion.div>

          </div>
          </motion.section>
                  {/* ======================================================
                        LIGHTBOX MODAL
        ======================================================= */}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
            >
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl overflow-hidden rounded-4px bg-white shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-xl transition hover:bg-red-500 hover:text-white"
                >
                  <FiX size={24} />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-full object-cover"
                />

                {/* Bottom Content */}
                <div className="p-8">

                  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {selectedImage.category}
                  </span>

                  <h2 className="mt-5 text-3xl font-black text-slate-900">
                    {selectedImage.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    Explore our modern healthcare environment where
                    compassionate patient care meets advanced medical
                    technology and world-class facilities.
                  </p>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================
                        CTA SECTION
        ======================================================= */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-[40px] bg-linear-to-r from-blue-600 via-blue-700 to-cyan-500 p-10 shadow-2xl lg:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                Experience Better Healthcare
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Visit Our
                <br />
                Medical Center Today
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Discover modern healthcare facilities, experienced
                doctors, advanced medical equipment, and compassionate
                patient care designed to keep your family healthy.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-wrap justify-start gap-5 lg:justify-end">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl"
              >
                Book Appointment
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
              >
                Contact Us
              </motion.button>

            </div>

          </div>
        </motion.section>

        {/* ======================================================
                        TRUST FEATURES
        ======================================================= */}

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              title: "Advanced Technology",
              desc: "Modern diagnostic equipment and innovative treatment solutions.",
            },
            {
              title: "Expert Medical Team",
              desc: "Highly experienced doctors dedicated to compassionate patient care.",
            },
            {
              title: "Comfortable Environment",
              desc: "Designed to provide a relaxing and supportive healthcare experience.",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.section>
       </div>
      </div>
    </main>
  );
}
