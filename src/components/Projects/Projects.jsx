import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className=" container min-h-screen p-4 ">
      <div className=" mt-24 ">
        <div className="flex justify-between items-center">
          <div className="">
            <p>portfolio</p>
            <h1 className="text-3xl max-w-xs">
              My Creative Works Latest <span>Projects</span>
            </h1>
          </div>
          <a href="#" className="px-4 py-2 bg-teal-700 rounded-md hover:bg-teal-800 duration-200">
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