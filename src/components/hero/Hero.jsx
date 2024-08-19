import { motion } from 'framer-motion'
import { IoMdStarOutline } from 'react-icons/io'

const Hero = () => {


  return (
    <>
      {/* Background images */}
      <img
        src="/assets/icons/Vector 1.svg"
        alt=""
        className="absolute inset-0 w-auto h-auto object-cover opacity-20 top-20"
      />
      <img
        src="/assets/icons/Vector 3.svg"
        alt=""
        className="absolute inset-0 w-auto h-auto object-cover opacity-20 top-36"
      />

      <div className="py-4 px-8 min-h-screen flex flex-col-reverse md:flex-row md:justify-between">
        {/* Text and CTA */}
        <div className="relative  flex flex-col gap-4 items-center md:items-start text-center md:text-start justify-center z-20">
          <div className="absolute opacity-10 drop-shadow-[0px_60px_150px_#583FBC] md:top-24 w-full aspect-square bg-radial-gradient from-[#00FFFF] to-[#00FFFF]/0 to-50% pointer-events-none" />
          {/* <div className="absolute w-full h-full bg-gradient-to-r from-teal-500 to-transparent opacity-20 rounded-full transform -rotate-12 -z-10" /> */}

          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl max-w-xl font-extrabold dark:text-gray-200"
          >
            <span className="font-medium">HEY!</span>
            <span className="dark:text-[#00fff5] text-[#548f8f]">
              I'm Abdullatif
            </span>
            ,<br /> Frontend Developer
          </motion.h1>
          <p className="w-full max-w-lg text-lg md:text-xl text-gray-800 dark:text-[#00adb5] font-medium">
            Agency-quality Webflow websites with the personal touch of a
            freelancer.
          </p>
          <a
            href="##"
            className="text-white bg-[#288f8b] hover:bg-[#288f8b] px-8 py-4 rounded-lg duration-150 shadow-lg transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Image and Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
          className="relative mt-12 flex justify-center md:justify-end  "
        >

          {/* Left-side Image */}
          <div className="relative  overflow-hidden    w-96 flex justify-center items-start md:-left-5 ">
            <div className="absolute md:top-7  md:left-10 z-10 flex  rotate-12 animate-pulse left-6 top-4">
              <IoMdStarOutline className="absolute text-3xl text-teal-300  top-1.5 -left-5 transform rotate-45" />
              <IoMdStarOutline className="text-2xl text-teal-400 absolute " />
              <IoMdStarOutline className="text-2xl text-teal-500 absolute top-6" />
            </div>
            {/* shape 2 */}
            <div className="absolute md:top-7  md:right-10 z-10 flex  rotate-12  right-6 top-4">
              <div className="h-6 w-6 rotate-[30deg] bg-slate-400 absolute right-0 md:-right-6 top-1 z-10 rounded" />
              <div className="h-6 w-6 rotate-[30deg] bg-slate-400 absolute right-0 md:-right-10 top-0 z-10 rounded" />
              <div className="h-6 w-6 rotate-[10deg] bg-slate-400 absolute left-4 md:-right-0 top-10 rounded-full" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className=" h-64 w-64 mb-2 md:h-52 mt-10 md:w-64 scale-150 bg-[#00adb5] relative mt-32  rounded-full flex justify-center items-center  "
            >
              <motion.img
                initial={{ x: 200, opacity: 0, translateY: 8 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1, translateY: -6 }}
                viewport={{ once: true }}
                src="/assets/phnn.png"
                alt=""
                className=" transform  scale-150  absolute object-contain h-[350px] mx-auto -top-16   "
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="relative w-full">
        <div className="relative w-full overflow-hidden border-dashed border-b-2 bg-teal-800/50" />
        <div className="absolute overflow-hidden h-4 rounded-full right-1/2 -top-2 w-4 outline-double outline-4 bottom-0 z-10 flex justify-center items-center">
          <div className="h-2 w-2 dark:bg-white bg-black rounded-full" />
        </div>
      </div>
    </>
  )
}

export default Hero



  // const icon = {
  //   hidden: {
  //     pathLength: 0,
  //     fill: 'rgba(255, 255, 255, 0)',
  //   },
  //   visible: {
  //     pathLength: 1,
  //     fill: 'rgba(255, 255, 255, 1)',
  //   },
  

  
      {/* Background Images */}
      {/* <img
       
  

      <div className="py-8 px-6 md:py-16 md:px-12 min-h-screen flex flex-col-reverse md:flex-row md:justify-between"> */}
        {/* Text and CTA */}
        {/* <div className="relative flex flex-col gap-6 items-center md:items-start text-center md:text-start justify-center z-20">
          <div className="absolute w-full h-full bg-gradient-to-r from-teal-500 to-transparent opacity-20 rounded-full transform -rotate-12 -z-10" />

          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold dark:text-gray-200"
          >
       
         
           
        </div> */}

        {/* Image and Decorative Elements */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          className="relative mt-12 flex justify-center md:justify-end"
        >
          <div className="absolute top-10 right-0 md:right-4 z-10">
            <IoMdStarOutline className="text-4xl text-teal-300 animate-pulse" />
            <IoMdStarOutline className="text-4xl text-teal-400 animate-pulse" />
            <IoMdStarOutline className="text-4xl text-teal-500 animate-pulse" />
          </div>

          <div className="relative mt-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              className="h-64 w-64 md:h-80 md:w-80 bg-teal-200 absolute rounded-full left-4 md:left-6 top-5"
            />
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              src="/assets/ph2.png"
              alt="Profile Image"
              className="relative transform md:-translate-y-16 left-0 top-6 object-cover w-64 h-80 md:w-80 md:h-96 rounded-md shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      // <div className="relative w-full">
      //   <div className="relative w-full overflow-hidden border-dashed border-b-2 bg-teal-800/50" />
      //   <div className="absolute overflow-hidden h-4 rounded-full right-1/2 -top-2 w-4 outline-double outline-4 bottom-0 z-10 flex justify-center items-center">
      //     <div className="h-2 w-2 dark:bg-white bg-black rounded-full" />
      //   </div>
      // </div>

