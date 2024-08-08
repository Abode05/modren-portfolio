
const Banner = () => {
  return (
    <div className="container mt-8 p-10 relative max-w-6xl w-full  z-20 overflow-hidden">
      <div className="   h-96 w-full rounded-xl   relative   bg-teal-600  flex  items-center    ">
        <div className="absolute  h-96 -z-10   w-full rounded-xl  bg-teal-800  transform -rotate-2  "></div>
{/*     
        <img
          src="/assets/icons/Vector 1.svg"
          alt=""
          className="absolute top-8"
        /> */}
        {/* <img src="/assets/icons/Vector 1.svg" alt="" className="absolute" /> */}
        <img
          src="/assets/icons/Vector 3.svg "
          alt=""
          className="absolute  overflow-hidden right-0 bottom-5"
        />
        <img
          src="/assets/icons/Vector 3.svg "
          alt=""
          className="absolute  overflow-hidden right-0 bottom-12"
        />
        <img
          src="/assets/icons/Vector 3.svg "
          alt=""
          className="absolute  overflow-hidden right-0 bottom-16 "
        />
        <div className="flex justify-around  items-center flex-col md:flex-row  w-full z-10 ">
          <div className="max-w-md flex flex-col gap-8 z-20">
            <h1 className="text-4xl font-bold">try me oit risk free!</h1>
            <p className="text-md text-center md:text-start text-gray-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate hic perspiciatis eum praesentium eligendi dolor non
              voluptas incidunt, voluptate iure quasi tempora magnam quae ipsum
              accusantium accusamus dolore repudiandae eius?
            </p>
          </div>
          <button className="px-6 py-2 rounded bg-teal-800 mt-4">contact</button>
        </div>
      </div>
    </div>
  )
}

export default Banner