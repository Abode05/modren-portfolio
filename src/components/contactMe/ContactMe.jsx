import { FaPhoneAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'


const ContactMe = () => {

 

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '3a68d74a-b28b-401f-9794-a64b6fe6daec')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      Swal.fire({
        title: 'succsess',
        text: 'message sent succsess!',
        icon: 'success',
       
        customClass: {
          confirmButton: 'bg-teal-800', // تحديد فئة مخصصة لزر التأكيد
        },
      })

    }
  }

  return (
    <div className="container min-h-screen p-2 ">
      <div className="mt-20">
        <div className="">
          <p className="text-lg text-teal-600 font-semibold mb-2">Contact</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  ">
            <h1 className="text-4xl  font-bold">
              Let’s Discuss Your <span className="text-teal-500">Project</span>
            </h1>
            <div className="loader"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between mt-12  ">
          <div className="flex flex-col gap-14 max-w-md w-full p-2 ">
            <div className="flex justify-start items-center gap-2   ">
              <div className="bg-teal-400 p-4 rounded-md ">
                <FaPhoneAlt className="text-xl  " />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-md dark:text-gray-200 text-teal-700 text-lg font-semibold ">Call me</h1>
                <p className="font-bold">+963 946449679</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            
            className="flex flex-col gap-4 max-w-2xl w-full p-2"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
            
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
               
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full p-3 border border-gray-300 rounded bg-transparent focus:outline outline-1 outline-teal-300"
            
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded h-32 bg-transparent focus:outline outline-1 outline-teal-300"
              
            ></textarea>
            <button
              type="submit"
              className="w-full  md:w-1/4 bg-teal-800 hover:bg-teal-900 duration-200 text-white p-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
