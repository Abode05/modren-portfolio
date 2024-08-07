import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import { projectData } from '../../constant/data'
const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      {' '}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-12 mt-16 w-full  ">
        {projectData.map((project, index) => (
          <div
            className="card flex flex-col gap-5 bg-black/20 rounded "
            key={index}
          >
            <img
              src={project.img}
              alt=""
              className=" h-[220px] rounded object-cover w-full"
            />
            <h1 className="text-2xl font-bold  ">{project.name}</h1>
            <div className="flex justify-between p-1 items-center text-xl">
              <p>{project.language}</p>
              <a href={project.link} className="text-3xl">
                <LuArrowUpRightFromCircle  className='text-teal-600'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard