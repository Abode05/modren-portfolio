import { motion } from 'framer-motion'
import SkillBar from './SkillBar'
const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 80 },
  { name: 'Javascript', level: 85 },
  { name: 'React', level: 95 },
]


const About = () => {
  return (
    <div className="min-h-screen  relative   p-6 text-black ">
      <div className="flex justify-between  mt-8 relative   flex-col  lg:flex-row ">
        {' '}
        {/* <div className=" w-full lg:w-1/2 h-screen flex  relative   ">
          <div className="relative mt-24 md:ml-4   ml-1      ">
            <motion.div className="absolute border-2  border-gray-700 dark:border-gray-200 rounded-full h-80 w-80 scale-x-125 transform rotate-45  left-1 " />
            <motion.div className="absolute border-2 dark:border-gray-200 border-gray-700 rounded-full h-80 w-80 scale-x-125 transform rotate-45 skew-y-4 translate-2 left-6 -top-6" />
            <motion.div className="absolute border-2  dark:border-gray-200 border-gray-700 rounded-full h-80 w-80 scale-x-125 transform rotate-45  left-12 -top-11 -translate-x-2 translate-y-1  " />
          </div>
          <motion.img
            src="/assets/icons/html.svg"
            alt=""
            className="z-20  absolute top-16 md:top-20 left-4  "
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
          />
          <motion.img
            src="/assets/icons/github.svg"
            alt="HTML5"
            className="h-20 w-20 absolute bottom-40 md:bottom-52 left-12 bg-black rounded-full "
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
          />
          <motion.img
            src="/assets/icons/figma.svg"
            alt=""
            whileHover={{ transition: { duration: 1 } }}
            className="h-20 w-20 absolute bottom-40 md:bottom-48 left-72 "
          />
        </div> */}
        <div className=" w-full lg:w-1/2 p-8 relative h-screen text-black ">
          <h1 className=" dark:text-white text-3xl mb-4">About Me</h1>
          <p className="dark:text-white">
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
