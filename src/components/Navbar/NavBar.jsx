import { navItem } from '../../constant/data'
import { useEffect, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const { pathname } = useLocation()
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
    <div className="fixed w-full z-40 px-5 backdrop-blur-md transition-colors duration-300">
      <div className="flex items-center justify-between p-4 w-full ">
        <a
          href="#"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600"
        >
          Abdullatif
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navItem.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.link}
                  className={`${
                    item.link === pathname
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
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <AiOutlineClose className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-teal-600 z-50">
          <nav
            aria-label="Global"
            className="h-full flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center space-y-6">
              {navItem.map((item, index) => (
                <li key={index} className="w-full text-center">
                  <a
                    href={item.link}
                    className="block w-full py-3 text-lg text-gray-100 hover:bg-teal-800 transition-colors"
                    onClick={() => setToggleMenu(false)} // Close menu on link click
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
