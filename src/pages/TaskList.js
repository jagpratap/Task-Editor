import { useNavigate } from "react-router-dom"
import { useUserTasks } from '../context/UserContext'

const TaskList = () => {
    const navigate = useNavigate()

    const { userTasks, setUserTasks } = useUserTasks()

    const onClickEdit = (id) => {
        navigate(`/${id}`)
    }

    const onClickDelete = (id) => {
        const userTasksTemp = userTasks.filter((task, index) => index !== id)
        setUserTasks(userTasksTemp)
    }

    const onClickHome = () => {
        navigate("/")
    }

    return (
        <section>
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {userTasks.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.time}</td>
                            <td><button className='btn' onClick={() => onClickEdit(index)}>Edit</button></td>
                            <td><button className='btn' onClick={() => onClickDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn" onClick={onClickHome}>Add More Task</button>
        </section>

    )
}

export default TaskList