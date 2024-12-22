import NavBar from './components/Navbar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experince/Experience'
import Banner from './components/banner/Banner'
import Projects from './components/Projects/Projects'
import ContactMe from './components/contactMe/ContactMe'
import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import ProjectShow from './components/projectSow/ProjectShow'


function App() {
  return (
    <div
      className="dark:bg-[#222831] dark:text-gray-100
     text-gray-800 bg-[#EEEEEE]  w-full "
    >
      <NavBar />

      <div className="" id="hero">
        <Hero />
      </div>

      <div className="" id="about">
        <About />
      </div>

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        className="sticky  z-50 h-12 w-12 rotate-2 bg-teal-600/80 left-[80%]  sm:left-[92%]
              top-[80%]  rounded duration-150  "
      >
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, rotate: 45 }}
          className="h-12 w-12 bg-teal-600 absolute flex justify-center
         items-center  rounded hover:bg-teal-700 duration-150 cursor-pointer z-50"
        >
          <a href="#">
            <FaArrowUp className="text-2xl -rotate-45" />
          </a>
        </motion.div>
      </motion.div>

      <div className="" id="experince">
        <Experience />
      </div>
      <div className="">
        <Banner />
      </div>
      <div className="" id="projects">
        <Projects />
      </div>
      <div className="" id="contact">
        <ContactMe />
      </div>
      <Routes>
        <Route path="/projectShow/:id" element={<ProjectShow />} />
      </Routes>
    </div>
  )
}

export default App
