import { motion } from 'framer-motion'
const skillicon = [{ img: '/assets/icons/html.svg' },{
  img:"/assets/icons/css.svg"
}]
const SkillBar = ({ name, level,img }) => {
  return (
    <div className="mb-4 mt-12 text-gray-900 dark:text-gray-200">
      <div className="flex justify-between mb-1">
        <span className="font-bold">{name}</span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-300 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="h-full  bg-[#00adb5] rounded-full flex justify-end  items-center relative"
        >
          <div
            className="w-0 h-0 border-t-[15.6px] border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent border-[#00adb5] absolute -top-6"
          ></div>
          <div className="absolute -top-14 -right-2">
            <div
              className="relative bg-teal-600 dark:bg-teal-600 border-2 border-teal-600 dark:border-teal-600
              rounded-md px-1 py-1 flex justify-between gap-1 items-center overflow-hidden shadow-lg"
            >
              <img
                src={img}
                className="w-7 h-7 object-cover rounded "
                alt="Icon"
              />
              <p className="text-xs text-white  font-bold">{level}%</p>
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                }}
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>
          <div className="h-4 w-4 outline-[#6efafa] outline-2 outline bg-[#00adb5] dark:bg-[#00adb5] rounded-full z-10"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillBar
