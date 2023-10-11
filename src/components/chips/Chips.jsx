import { useState } from 'react';
import './chips.scss'
function Chips() {
    const [tasks, setTask] = useState([]);
    const [text, setText] = useState('');
    const addTask = (event) => {
        if (event.key === 'Enter') {
            const newTask = {
                id: Math.floor(Math.random() * 1000000),
                task: text
            }
            setTask(prevState => [...prevState, newTask])
            setText('')
        }
    }
    const deleteTask = (id) => {
        const filter = tasks.filter((task) => task.id !== id)
        setTask(filter)
    }
    const change = () => {
        const colors = ['green', 'blue', 'red', 'violet', 'brown'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];

    }
    return (
        <div className="container">
            <div className="chips">
                <div className="chips-tasks">
                    {
                        tasks.map((task) => (
                            <div className="chips-task" style={{
                                background: change()
                            }}>
                                {task.task}
                                <button onClick={() => deleteTask(task.id)}>X</button>
                            </div>
                        ))
                    }
                </div>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                    change()
                }} onKeyPress={addTask} />
            </div>
        </div>
    )
}
export default Chips;