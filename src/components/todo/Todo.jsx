import { useState } from 'react';
import './todo.scss'
function ToDo() {
    const [tasks, setTask] = useState([])
    const [text, setText] = useState('')
    const [Dotask, setDone] = useState([])
    const addTask = (event) => {
        if (text != '') {
            if (event.key === 'Enter') {
                const newTask = {
                    id: Math.floor(Math.random() * 1000000),
                    task: text
                }
                setTask(prevState => [...prevState, newTask])
                setText('')
            }
        }
    }
    const checkedTask = (id) => {
        const findTask = tasks.find((task) => task.id === id);
        if (findTask) {
            setDone((prevState) => [...prevState, findTask])
            const changeTask = tasks.filter((task) => task.id !== id);
            setTask(changeTask)
        } 
    }
    const fromDo = (id) => {
        const findTask = Dotask.find((task)=>task.id ===id);
        if(findTask){
            setTask((prevState) => [...prevState, findTask])
            const reverse = Dotask.filter((task) => task.id !== id);
            setDone(reverse)
        }
    }
    return (
        <div className="container">
            <div className="to-do">
                <input type="text" onChange={(event) => setText(event.target.value)} value={text} onKeyPress={addTask} />
                <div>
                    <h3 style={{
                        display: tasks.length != 0 ? "block" : "none"
                    }}>
                        To Do
                    </h3>
                    {tasks.map((item) => (
                        <p id={item.id}>
                            <div>
                                <input type="checkbox" onClick={() => checkedTask(item.id)} checked={item.checked} />
                                <span>{item.task}</span>
                            </div>
                        </p>
                    ))}
                    <h3 style={{
                        display: Dotask.length != 0 ? "block" : "none"
                    }}>
                        Done
                    </h3>
                    {Dotask.map((item) => (
                        <p id={item.id} key={Math.floor(Math.random() * 1000000)}>
                            <div>
                                <input type="checkbox" onClick={() => fromDo(item.id)} checked={item.checked} />
                                <span>{item.task}</span>
                            </div>
                        </p>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default ToDo;