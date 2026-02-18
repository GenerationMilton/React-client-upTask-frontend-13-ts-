import { Navigate, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getProjectById } from "@/api/ProjectAPI"
import EditProjectForm from "./EditProjectForm"

export default function EditProjectView() {
    const params = useParams()
    console.log(params)
    const projectId = params.projectId!
    console.log(projectId)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })
    console.log(data)
    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to='/404' />
    if(data) return <EditProjectForm data={data} projectId={projectId}/>

}
