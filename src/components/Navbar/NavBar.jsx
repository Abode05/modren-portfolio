import { navItem } from '../../constant/data'
import { useEffect, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


const NavBar = () => {
  const  pathname  = useLocation()
console.log(pathname)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [toggleMenu, settoggleMenu] = useState(false)

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
      <div className="flex items-center justify-between p-4">
        <a href="#" className="text-4xl text-stroke-3 text-transparent    ">
          Abdullatif
        </a>
        <div className="hidden md:block dark:text-white">
          <ul className="flex gap-6 items-center -translate-x-16">
            {navItem.map((item, index) => (
              <li key={index} className="duration-200">
                <a
                  href={item.link}
                  className={`${
                    item.link===pathname.hash
                      ? 'text-teal-600'
                      : 'text-gray-900 dark:text-gray-100 duration-150 dark:hover:text-teal-500 hover:text-teal-500'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer relative sm:left-48 md:left-0 duration-150"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <img src="/assets/icons/Vector.svg" alt="ss" />
          ) : (
            <img src="/assets/icons/Sun_fill.svg" alt="ff" />
          )}
        </div>
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => settoggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <AiOutlineClose className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden  h-screen bg-teal-600 w-full">
          <nav aria-label="Global" className="relative">
            <ul className="flex flex-col items-center text-lg text-gray-100 justify-start h-screen">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer w-full text-center relative py-9 hover:bg-teal-800 duration-150"
                >
                  <a
                    href={item.link}
                    className="w-full"
                    onClick={() => settoggleMenu(false)} // Close menu on link click
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
