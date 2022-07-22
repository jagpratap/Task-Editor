import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useUserTasks } from '../context/UserContext'

const Home = () => {
    const { userTasks, setUserTasks } = useUserTasks()
    const { taskId } = useParams()
    const navigate = useNavigate()
    const [value, setValue] = useState(true)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        time: ''
    })

    useEffect(() => {
        if (!taskId) return;
        if (!userTasks.length) {
            navigate("*");
            return
        }
        setFormData(userTasks[taskId]);
        setValue(prevValue => !prevValue);
    }, [])

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        let userTasksTemp;
        if (taskId) {
            const editedTask = userTasks.map((task, index) => {
                if (index === Number(taskId)) {
                    return formData
                }
                return task
            })
            userTasksTemp = [...editedTask]
        } else {
            userTasksTemp = [...userTasks, formData]
        }
        setUserTasks(userTasksTemp)
        navigate('/tasklist')
    }

    return (
        <section className="section">
            <h1>Add a New Task</h1>
            <form className='form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor="title" className="form-label">TITLE</label>
                    <input
                        type="text"
                        className="form-control"
                        name='title'
                        id="title"
                        placeholder="Enter Title..."
                        value={formData.title}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="description" className="form-label">DESCRIPTION</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name='description'
                        id="description"
                        placeholder="Enter Description..."
                        rows={10} cols={50}
                        value={formData.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="time" className='form-label'>TIME</label>
                    <input
                        type="time"
                        className='form-control form-control-time'
                        name='time'
                        id='time'
                        value={formData.time}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div className='form-group form-group-button'>
                    <button className={`btn`}>{value ? "Add" : "Edit"} Task</button>
                </div>
            </form>
        </section>
    )
}

export default Home