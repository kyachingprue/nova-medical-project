import { Button } from "@mui/material";
import backgroundGradient from "../../assets/images/background1.jpg"
import { motion  } from "motion/react";

const HowWeWork = () => {

  const works = [
  {
    number: "01",
    title: "Listen & Understand",
    description:
      "We begin by listening carefully to your health concerns, goals, and medical history so we can understand your unique needs.",
  },
  {
    number: "02",
    title: "Personalized Care Plan",
    description:
      "Our specialists create a customized treatment plan designed specifically for your lifestyle, condition, and long-term wellness.",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "We continue monitoring your progress and provide guidance, follow-up appointments, and continuous care throughout your journey.",
  },
  ];


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  }
  return (
    <main
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundGradient})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
     {/* Background Blur */}
    <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/30 blur-[120px]" />
    <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-[130px]" />

    {/* Container */}
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
     <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
      className="flex flex-col gap-10 border-b border-blue-200 pb-14 pt-12 lg:items-center lg:justify-between"
>
        <section className="flex border-b border-blue-400 justify-between items-center gap-4 flex-col lg:flex-row pb-14 pt-12">
          <motion.div
           variants={item}
           className="lg:w-1/2"
>
        <p className="mb-4 inline-block rounded-full bg-blue-100 px-5 py-3 text-sm font-bold uppercase tracking-widest text-blue-700">
          How We Work
         </p>

        <h2 className="text-4xl font-black leading-tight text-slate-100 md:text-5xl lg:text-6xl">
           Here For Your
        <span className="text-blue-900">
           {" "}Health,
        </span>
           <br />
          Here For Your Heart
        </h2>
         </motion.div>
          <motion.div
         variants={item}
         className="flex flex-col gap-6 lg:w-1/2 lg:pl-24">
       <p className="text-lg leading-8 text-slate-200">
        We offer compassionate healthcare, combining physical,
        emotional, and preventive care to help you live your
        healthiest and happiest life.
        </p>

       <motion.div
         whileHover={{
           scale: 1.05,
          }}
         whileTap={{
         scale: .95,
          }}>
      <Button
       variant="contained"
       className="rounded-full bg-blue-600! px-8! py-3! font-semibold! shadow-lg"
      >
      Get Consult Now
     </Button>
    </motion.div>
    </motion.div>
    </section>
     <motion.section
       variants={container}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className="relative grid gap-8 py-20 md:grid-cols-2 lg:grid-cols-3"
       >
          {works.map((work) => (

       <motion.div
        key={work.number}
        variants={item}
        whileHover={{
        y:-12,
        scale:1.03 }}
          transition={{
           duration:.3
          }}
        className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 p-8 backdrop-blur-xl shadow-xl">
         <div className="absolute right-6 top-5 text-7xl font-black text-blue-100">
        {work.number}
          </div>
         <div className="relative z-10">
         <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white shadow-lg">
         {work.number}
         </div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
        {work.title}
        </h2>
        <p className="leading-8 text-slate-600">
         {work.description}
         </p>
          <motion.button
           whileHover={{
           x:6}}
           className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

          Learn More →

         </motion.button>

            </div>
           </motion.div>
          ))}
        </motion.section>
        </motion.section>
        </div>
    </main>
  )
};

export default HowWeWork;
