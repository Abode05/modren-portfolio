import { FaPhoneAlt } from 'react-icons/fa'
const ContactMe = () => {
  return (
    <div className="container min-h-screen p-2 ">
      <div className="mt-24">
        <div className="">
          <p className="text-lg text-teal-600 font-semibold mb-2">contact</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  ">
            <h1 className="text-4xl  font-bold">
              Let’s Discuss Your <span className='text-teal-500 '> Project</span> 
            </h1>
            <div className="loader "></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between mt-12  ">
          <div className="flex flex-col gap-14 max-w-md w-full p-2 ">
            <div className="flex justify-start items-center gap-2">
              <div className="bg-slate-600 p-2 rounded-md">
                <FaPhoneAlt className="text-xl  " />
              </div>
              <div className="flex flex-col">
                <h1>call me</h1>
                <p>+963 946449679</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2">
              <div className="bg-slate-600 p-2 rounded-md">
                <FaPhoneAlt className="text-xl  " />
              </div>
              <div className="flex flex-col">
                <h1>call me</h1>
                <p>+963 946449679</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2   ">
              <div className="bg-slate-600 p-4 rounded-md ">
                <FaPhoneAlt className="text-xl  " />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-md text-gray-200">call me</h1>
                <p className="font-bold">+963 946449679</p>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-4 max-w-2xl w-full p-2">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
              />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded h-32 bg-transparent  focus:outline outline-1 outline-teal-300"
            ></textarea>
            <button className="w-full  md:w-1/4 bg-blue-500 text-white p-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
