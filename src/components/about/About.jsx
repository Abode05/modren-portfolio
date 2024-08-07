import { motion } from 'framer-motion'
const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 80 },
  { name: 'Javascript', level: 85 },
  { name: 'React', level: 95 },
]

const SkillBar = ({ name, level }) => (
  <div className="mb-4 mt-12">
    <div className="flex justify-between mb-1">
      <span className="text-white">{name}</span>
    </div>
    <div className="w-full bg-gray-200 h-3 rounded-full">
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
                repeat: Infinity,
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
const About = () => {
  return (
    <div className="min-h-screen  relative   p-6 ">
      <div className="flex justify-between  mt-8   flex-col  lg:flex-row ">
        {' '}
        <div className=" w-full h-screen relative  ">
          <div className="relative mt-24 md:ml-4   ml-1    ">
            <motion.div className="absolute border-2  border-gray-200 rounded-full h-80 w-80 scale-x-125 transform rotate-45  " />
            <motion.div className="absolute border-2 border-gray-200 rounded-full h-80 w-80 scale-x-125 transform rotate-45 skew-y-4 translate-2 left-6 -top-6" />
            <motion.div className="absolute border-2 border-gray-200 rounded-full h-80 w-80 scale-x-125 transform rotate-45  left-12 -top-11 -translate-x-2 translate-y-1  " />
          </div>
          <motion.img
            src="/assets/icons/html.svg"
            alt=""
            className="z-20  absolute top-16 left-8  "
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
          />
          <motion.img
            src="/assets/icons/github.svg"
            alt="HTML5"
            className="h-20 w-20 absolute bottom-56  left-12"
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
          />
          <motion.img
            src="/assets/icons/figma.svg"
            alt=""
            whileHover={{ transition: { duration: 1 } }}
            className="h-20 w-20 absolute bottom-48 left-72 "
          />
        </div>
        <div className=" w-full p-8 relative h-screen ">
          <h1 className=" text-white text-3xl mb-4">About Me</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
