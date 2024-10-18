import NavBar from './components/Navbar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experince/Experience'
import Banner from './components/banner/Banner'
import Projects from './components/Projects/Projects'
import ContactMe from './components/contactMe/ContactMe'

function App() {
  return (
    <div className="dark:bg-[#222831] dark:text-gray-100
     text-gray-800 bg-[#EEEEEE]  w-full ">
      <NavBar />
      <div className="" id="hero">
        <Hero />
      </div>
      <div className="" id="about">
        <About />
      </div>
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
    </div>
  )
}

export default App
