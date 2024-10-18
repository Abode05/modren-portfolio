import { navItem } from '../../constant/data'
import { useEffect, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const  pathname  = useLocation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [toggleMenu, setToggleMenu] = useState(false)

  const element = document.documentElement

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      element.classList.add('dark')
      element.classList.remove('light')
    } else {
      element.classList.add('light')
      element.classList.remove('dark')
    }
  }, [theme, element])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div
      className="fixed w-full z-40  backdrop-blur-md mx-auto transition-colors 
    duration-300 py-4 px-16"
    >
      <div className="flex items-center justify-between  w-full gap-4">
        <a
          href="#"
          className="text-2xl md:text-4xl flex-1  md:flex-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600"
        >
          Abdullatif
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 -translate-x-7 ">
          <ul className="flex gap-6 items-center">
            {navItem.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.link}
                  className={`${
                    item.link === pathname.hash
                      ? 'text-teal-600'
                      : 'text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-500'
                  } transition-colors duration-150`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="cursor-pointer" onClick={toggleTheme}>
          <img
            src={
              theme === 'light'
                ? '/assets/icons/Vector.svg'
                : '/assets/icons/Sun_fill.svg'
            }
            alt="Theme Toggle"
            className="w-8 h-8 md:w-8 md:h-8 "
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="block md:hidden cursor-pointer z-50 "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <AiOutlineClose className="text-3xl text-gray-200 dark:text-gray-100" />
          ) : (
            <HiMenuAlt3 className="text-3xl text-gray-900 dark:text-gray-100" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div
          className="md:hidden fixed top-0 left-0 h-screen w-full bg-teal-600/90 
          z-40 transition-opacity  
        "
        >
          <nav className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-6 w-full">
              {navItem.map((item, index) => (
                <li key={index} className="w-full text-center ">
                  <a
                    href={item.link}
                    className="block  py-3 text-lg hover:bg-teal-800 text-gray-100  transition-colors duration-200"
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default NavBar
