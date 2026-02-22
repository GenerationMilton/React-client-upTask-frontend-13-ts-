import { getTaskById } from "@/api/TaskAPI"
import { useQuery } from "@tanstack/react-query"
import { useLocation, useParams } from "react-router-dom"
import EditTaskModal from "./EditTaskModal"

export default function EditTaskData() {

    const params = useParams()
    console.log(params)
    const projectId = params.projectId!
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const taskId = queryParams.get('editTask')!
    console.log(taskId)

    const { data } = useQuery({
        queryKey: ['task', taskId],
        queryFn:() => getTaskById({projectId, taskId}),
        // !! to bolean value == true if contains an element
        enabled: !!taskId
    })

    console.log(data)

    if(data) return <EditTaskModal data={data}/>
}
