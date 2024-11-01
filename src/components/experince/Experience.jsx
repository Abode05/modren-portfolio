import { education } from '../../constant/data'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className=" min-h-[700px] relative py-5 px-10 md:px-12 mt-16">
      <div className="relative flex justify-center items-center">
        <div className="h-6 w-6 bg-teal-600 rounded-full absolute left-12 sm:left-14 -bottom-4"></div>
        <div className="h-8 w-8 bg-teal-500 rounded-md absolute left-0 sm:-left-8 bottom-2"></div>
        <div className="h-6 w-6 bg-teal-600 rounded-full absolute -left-1 sm:-left-10 bottom-20"></div>
        <div className="relative mt-12 w-full py-5">
          {/* Decorative shapes */}
          <div className="h-6 w-6 bg-teal-600 rounded-full absolute right-24 sm:right-28 top-0"></div>
          <div className="h-8 w-8 bg-teal-500 rounded-md absolute right-10 sm:right-16 md:top-6 rotate-45 top-4"></div>
          <div className="h-6 w-6 bg-teal-600 rounded-full absolute right-6 sm:right-10 top-20"></div>

          {/* Header */}
          <div className=" md:text-center">
            <p className="text-lg font-semibold text-teal-700">
              Education and Experience
            </p>
            <h2 className="text-3xl font-bold  mb-8 text-teal-600">
              Education & Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative flex justify-center items-center   ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-12 mt-4 relative px-4 text-md w-full">
              {/* Left dashed border */}
              <div className="absolute h-full left-[5%] sm:left-[2%] lg:left-0 transform -translate-x-1/2 flex items-center  justify-center">
                <div className="relative h-full border-l-2 border-dashed border-black dark:border-gray-200 flex flex-col">
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute transform -translate-x-1/2 top-[40%] md:top-[60%]"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute transform -translate-x-1/2 top-[75%] md:hidden"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 left-1/2 transform -translate-x-1/2 bottom-[5%] md:bottom-0"
                  />
                </div>
              </div>

              {/* Right dashed border */}
              <div className="absolute h-full md:left-[56%] lg:left-[52%] hidden md:flex transform -translate-x-1/2 items-center justify-center">
                <div className="relative h-full border-l-2 border-dashed border-black dark:border-gray-200 flex flex-col">
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 absolute transform -translate-x-1/2 top-[25%] md:top-[60%]"
                  />
                  <img
                    src="/assets/icons/cycle.svg"
                    alt=""
                    className="w-5 h-5 z-50 left-1/2 transform -translate-x-1/2 bottom-[5%] md:bottom-0"
                  />
                </div>
              </div>

              {/* Education/Experience Items */}
              {education.map((item, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  key={index}
                  className="max-w-md px-2"
                >
                  <h1 className="text-2xl font-semibold text-teal-500">
                    {item.title}
                  </h1>
                  <p className="max-w-md text-md dark:text-gray-200">
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
