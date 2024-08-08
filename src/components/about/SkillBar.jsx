import { motion } from 'framer-motion'

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4 mt-12 text-teal-900">
      <div className="flex justify-between mb-1">
        <span className="text-teal-900 font-bold">{name}</span>
      </div>
      <div className="w-full  h-3 rounded-full bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 2 }}
          className="h-full bg-[#16caca] rounded-full flex justify-end items-center relative "
          // style={{ width: `${level}%` }}
        >
          <div
            className="w-0 h-0 border-t-[15.6px] border-l-[10px] border-l-transparent
         border-r-[10px] border-r-transparent border-teal-500 absolute -top-6 "
          ></div>{' '}
          <div className="absolute -top-14 -right-2">
            <dev
              className="relative bg-teal-500 border-2 border-[#00FFFF]
         rounded-md px-1 py-1 flex  justify-between items-center    overflow-hidden shadow-[0_0_15px_5px_rgba(56,189,248,0.5)] "
            >
              <img
                src="/assets/icons/html.svg"
                className="w-6 h-6 object-cover"
              />
              <p className="text-xs"> {level}%</p>
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: 0,
                  repeatType: 'loop',
                }}
                style={{ willChange: 'transform' }}
              />
            </dev>
          </div>
          <div className="h-4 w-4  outline-teal-200 outline-2 outline bg-teal-700 rounded-full z-10 "></div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillBar
