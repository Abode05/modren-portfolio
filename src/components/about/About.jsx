import { motion } from 'framer-motion'
import SkillBar from './SkillBar'

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 95 },
]

const About = () => {
  return (
    <div className="min-h-screen relative p-6  text-gray-900  dark:text-gray-200">
      <div className="flex justify-between mt-8 flex-col md:flex-row gap-10 lg:ga-3">
        <div className="w-full lg:w-1/2  flex relative justify-center md:justify-start items-start overflow-hidden">
          <div className="relative md:ml-4 ml-4 h-[400px] w-[450px] flex items-center justify-center md:justify-start transform -rotate-[35deg]">
            <motion.div className="absolute border-2 border-[#00adb5] rounded-full h-64 w-64 md:h-80 md:w-80 scale-y-125 left-4" />
            <motion.div className="absolute border-2 border-[#00adb5] rounded-full h-64 w-64 md:h-80 md:w-80 scale-y-125 left-10" />
            <motion.div className="absolute border-2 border-[#00adb5] rounded-full h-64 w-64 md:h-80 md:w-80 scale-y-125 left-16" />
            <motion.img
              src="/assets/icons/html.svg"
              alt="HTML5"
              className="z-20 absolute top-0 md:-top-8 left-[35%]"
              whileHover={{ rotate: 360, transition: { duration: 1 } }}
            />
            <motion.img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="h-20 w-20 absolute bottom-0 md:-bottom-4 left-40 bg-gray-800 rounded-full"
              whileHover={{ rotate: 360, transition: { duration: 1 } }}
            />
            <motion.img
              src="/assets/icons/figma.svg"
              alt="Figma"
              className="h-20 w-20 absolute bottom-40 md:bottom-40 right-10 md:right-12"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 relative h-screen text-gray-900 dark:text-gray-200">
          <h1 className="text-4xl mb-4   font-semibold text-[#288f8b]">
            About Me
          </h1>
          <p className="mb-6 text-lg md:text-xl dark:text-gray-200 text-[#104346]">
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
