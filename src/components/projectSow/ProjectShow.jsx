import { useParams } from "react-router-dom"

const ProjectShow = () => {
  const { id } = useParams() // جلب معرف المشروع
  console.log(id)
  return <div>show project</div>
}

export default ProjectShow