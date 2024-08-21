import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className=" container min-h-screen p-4 ">
      <div className=" mt-24 ">
        <div className="flex justify-between items-center flex-col md:flex-row gap-5">
          <div className="">
            <p className="text-lg font-semibold text-teal-700">portfolio</p>
            <h1 className="text-4xl font-bold max-w-md">
              My Creative Works Latest{' '}
              <span className="text-teal-500">Projects</span>
            </h1>
          </div>
          <a 
          target='_blank'
            href="https://github.com/Abode05"
            className="px-4 py-2 bg-teal-700  text-gray-100 rounded-md hover:bg-teal-800 duration-200"
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
