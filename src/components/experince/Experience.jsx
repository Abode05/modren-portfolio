import { education } from '../../constant/data'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className="container min-h-[700px] relative px-6 mt-12">
      <div className="relative flex justify-center items-center">
        <div className="h-6 w-6 bg-teal-600 rounded-full absolute left-10 -bottom-5"></div>
        <div className="h-8 w-8 bg-teal-500 rounded-md absolute -left-4 bottom-6"></div>
        <div className="h-6 w-6 bg-teal-600 rounded-full absolute -left-12 bottom-20"></div>
        <div className="relative mt-16 w-full  py-5">
          {/* Decorative shapes */}

          <div className="h-6 w-6 bg-teal-600 rounded-full absolute right-28 top-0 "></div>
          <div className="h-8 w-8 bg-teal-500 rounded-md absolute right-16 md:top-6 rotate-45 top-4"></div>
          <div className="h-6 w-6 bg-teal-600 rounded-full absolute right-10 top-20"></div>
          {/* bottom */}

          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-teal-700">Education and Experience</p>
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
              Education & Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative flex justify-center items-center md:translate-x-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl justify-around   gap-16 mt-4 relative px-4 text-md w-full ">
              {/* Left dashed border */}
              <div className="absolute h-full left-[5%] lg:left-0 transform -translate-x-1/2 flex items-center justify-center">
                <div className="relative h-full border-l-2 border-dashed border-black dark:border-gray-200 flex flex-col">
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute    transform -translate-x-1/2 top-[40%] md:top-[60%]"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute    transform -translate-x-1/2 top-[75%] md:hidden"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50  left-1/2 transform -translate-x-1/2 bottom-[5%] md:bottom-0"
                  />
                </div>
              </div>
              {/* Right dashed border */}
              <div className="absolute h-full md:left-[56%] dark:border-white border-black lg:left-[52%] hidden transform -translate-x-1/2 md:flex items-center justify-center">
                <div className="relative h-full border-l-2 border-dashed border-black dark:border-gray-200 flex flex-col">
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute    transform -translate-x-1/2 top-[25%] md:top-[60%]"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50  left-1/2 transform -translate-x-1/2 bottom-[5%] md:bottom-0"
                  />
                </div>
              </div>

              {/* <div className="border-l-2 absolute h-full md:left-[52%] border-dashed"></div> */}

              {/* Education/Experience Items */}
              {education.map((item, index) => (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  key={index}
                  className="max-w-md px-2  "
                >
                  <h1 className="text-2xl font-semibold text-teal-500">
                    {item.title}
                  </h1>
                  <p className="max-w-md text-md dark:text-gray-200 ">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
