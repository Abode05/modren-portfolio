import { motion } from 'framer-motion'

const Hero = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  }
  return (
    <>
      {/* <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item absolute w-64 h-64 mt-20 fill-blue-600 bg-black left-[40%] stroke-slate-700"
       
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg> */}
      <img
        src="/assets/icons/Vector 1.svg "
        alt=""
        className="absolute  overflow-hidden right-2 bottom-6"
      />
      <img
        src="/assets/icons/Vector 3.svg "
        alt=""
        className="absolute  overflow-hidden right-2 bottom-6"
      />

      <div
        className="py-4   px-8 min-h-screen  flex flex-col-reverse   md:flex-row
             md:justify-between   "
      >
        <div
          className="relative flex flex-col gap-4 items-center md:items-start mt-5  
        text-center md:text-start   justify-center  z-20   "
        >
          {/* <div className="absolute w-40 h-40 bg-gradient-to-r from-transparent -z-10 to-blue-500 opacity-30 animate-pulse rounded-full  "></div> */}

          <div className="absolute opacity-20 drop-shadow-[100px_60px_150px_#583FBC] top-24  w-full aspect-square bg-radial-gradient from-[#00FFFF] to-[#00FFFF]/0  to-50%  pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl   max-w-xl font-bold  dark:text-gray-200  "
          >
            <span className="font-medium ">HEY!</span>
            <span className="drop-shadow-[0_10px_50px_#00FFFF] text-[#00FFFF] ">
              I'm Abdullatif
            </span>
            ,
            <br /> Frontend Developer
          </motion.h1>
          <p className="w-full max-w-xs text-lg text-gray-500 font-medium">
            Agency-quality Webflow websites with the personal touch of a
            freelancer.
          </p>
          <a href="##" className="cv mt-4">
            Download CV
          </a>
        </div>
        <motion.div
          initial={{ opacity: -1 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex justify-center  relative  md:justify-end "
        >
          <div className="h-6 w-6 rotate-[30deg] bg-slate-300 absolute right-0 md:-left-4 top-10  z-10 rounded "></div>
          <div className="h-6 w-6 rotate-[10deg] bg-slate-400 absolute left-5 md:-left-4 top-[40%]  rounded-full "></div>
          <div className="h-6 w-6 rotate-[10deg] bg-slate-500 absolute right-[20%] top-8  rounded "></div>
          <div className="h-6 w-6 rotate-[10deg] bg-slate-500 absolute right-[20%] top-[50%]  rounded-full "></div>
          {/* left */}
          <div className="relative mt-8 overflow-hidden">
            <motion.div
              initial={{ opacity: -1 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className="h-64 w-64 bg-[#408686] absolute rounded-full left-12 
             md:left-6 top-5 "
            ></motion.div>
            <motion.img
              initial={{ x: 200, opacity: 0, translateY: 8 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1, translateY: -6 }}
              viewport={{ once: true }}
              src="/assets/ph2.png"
              alt=""
              className="relative md:-translate-x-4 
              -translate-y-8 w-96 h-72 scale-105 object-contain  "
            />
          </div>
        </motion.div>
      </div>
      <div className="relative w-full">
        <div className="relative w-full  overflow-hidden  border-dashed   border-b-2 "></div>
        <div
          className="  absolute overflow-hidden h-4 rounded-full right-[50%] -top-2 w-4
           outline-double outline-4 bottom-0  z-10 flex justify-center items-center  "
        >
          <div className="h-2 w-2 bg-white rounded-full "></div>
        </div>
      </div>
    </>
  )
}

export default Hero