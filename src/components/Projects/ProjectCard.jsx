import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import { projectData } from '../../constant/data'
import { Link } from 'react-router-dom'
const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      {' '}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-12 mt-16 w-full  ">
        {projectData.map((project, index) => (
          <div
            className="card relative flex flex-col gap-5 bg-teal-200/10 rounded z-10  "
            key={index}
          >
            <div className="absolute shadow-custom-outer h-36 w-24  -z-10 right-4  top-12 "></div>
            <img
              src={project.img}
              alt=""
              className=" h-[220px] rounded-t object-cover w-full"
            />
            <div className="p-2">
              <h1 className="text-2xl font-bold  ">{project.name}</h1>
              <div className="flex justify-between p-1 items-center text-xl">
                <p>{project.language}</p>
                <Link to={`/projectShow/${project.id}`}  className="text-3xl" >
                  <LuArrowUpRightFromCircle className="text-teal-600 hover:text-teal-800 duration-200" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
