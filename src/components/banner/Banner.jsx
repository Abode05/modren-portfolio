import { FaArrowRight } from "react-icons/fa"

const Banner = () => {
  return (
    <div className="m-auto mt-8 py-5 px-10 md:px-12 relative max-w-6xl w-full z-20 overflow-hidden">
      <div className="h-96 w-full rounded-xl relative bg-teal-700 flex items-center">
        <div className="absolute h-96 -z-10 w-full rounded-xl bg-teal-500 transform -rotate-2"></div>

        <img
          src="/assets/icons/Vector 3.svg"
          alt=""
          className="absolute overflow-hidden right-0 bottom-5"
        />
        <img
          src="/assets/icons/Vector 3.svg"
          alt=""
          className="absolute overflow-hidden right-0 bottom-12"
        />
        <img
          src="/assets/icons/Vector 3.svg"
          alt=""
          className="absolute overflow-hidden right-0 bottom-16"
        />

        <div className="flex justify-around items-center flex-col md:flex-row w-full z-10">
          <div className="max-w-md flex flex-col gap-8 z-20">
            <h1 className="text-4xl font-bold text-gray-100">
              Ready to Work Together?
            </h1>
            <p className="text-md text-center md:text-start text-gray-200 font-medium">
              After exploring my experience and skills in the "About Me"
              section, I’m excited to start a new project with you! Let’s create
              something amazing together.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 rounded bg-teal-900 mt-4 text-white hover:bg-teal-800"
          >
            <span className="flex justify-center items-center gap-4">
              contact <FaArrowRight />
            </span>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
