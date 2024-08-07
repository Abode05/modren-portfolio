import { useLocation } from "react-router-dom"
import { navItem } from "../../constant/data"
import { useEffect, useState } from "react"

const NavBar = () => {
     const pathname = useLocation()

     const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
     const [toggleMenu, settoggleMenu] = useState(false)
    //
    console.log(theme)
    const elemant = document.documentElement
    useEffect(() => {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        elemant.classList.add('dark')
        elemant.classList.remove('light')
      } else {
        elemant.classList.add('light')
        elemant.classList.remove('dark')
      }
    }, [theme, elemant])

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className="fixed w-full z-20  px-5 backdrop-blur-md  transition-colors duration-300  ">
      <div className=" flex items-center  justify-between p-4 ">
        <a href="#" className="text-2xl font-semibold dark:text-white   ">
          Abdullatif
        </a>
        <div className="hidden md:block dark:text-white   ">
          <ul className="flex  gap-6 items-center ">
            {navItem.map((item, index) => (
              <li key={index} className="duration-200">
                <a
                  href={item.link}
                  className={`${
                    item.link === pathname.hash
                      ? 'text-blue-400'
                      : 'tex-gray-800 hover:text-blue-700 '
                  } `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer relative sm:left-48 md:left-0  left-20  duration-150   "
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <img src="/assets/icons/Vector.svg" alt="ss" />
          ) : (
            <img src="/assets/icons/Sun_fill.svg" alt="ff" />
          )}
        </div>
        <div
          className="block md:hidden cursor-pointer "
          onClick={() => settoggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <img src="/assets/icons/Close.svg" alt="close" />
          ) : (
            <img src="/assets/icons/Menu01.svg" alt="munu" />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden h-screen z-10 bg-gray-400    ">
          <nav aria-label="Global" className="relative  ">
            <ul className="flex flex-col items-center  text-sm z-50  h-screen">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer w-full text-center relative py-10 hover:bg-gray-500 "
                >
                  <a
                    href={item.link}
                    className={'w-full'}
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