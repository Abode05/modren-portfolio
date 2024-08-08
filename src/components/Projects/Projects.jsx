import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className=" container min-h-screen p-4 ">
      <div className=" mt-24 ">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-lg font-semibold text-teal-700">portfolio</p>
            <h1 className="text-4xl font-bold max-w-md">
              My Creative Works Latest{' '}
              <span className="text-teal-500">Projects</span>
            </h1>
          </div>
          <a
            href="#"
            className="px-4 py-2 bg-teal-600 text-gray-100 rounded-md hover:bg-teal-800 duration-200"
          >
            {' '}
            veiw github
          </a>
        </div>
        <div className="">
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects
