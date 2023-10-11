import { useState } from 'react';
import './mytodo.scss'

function MyTodo() {
    const [tasks, setTask] = useState([]);
    const [text, setText] = useState('');

    const add = () => {
        if (text.length != 0) {
            const newTask = {
                id: Math.floor(Math.random() * 1000000),
                task: text
            }
            setTask((prevState) => [...prevState, newTask]);
            setText('');
        }
    }
    const deleteTask = (id) => {
        const filter = tasks.filter((task) => task.id !== id)
        setTask(filter)
    }
    const checkedTask = (id) => {
        const findTask = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, checked: !task.checked };
            }
            return task;
        });
        setTask(findTask);
    }
    return (
        <div className="container">
            <div className="todo">
                <div className="todo-all">
                    <div className='navi'>
                        <input
                            type="text"
                            onChange={(event) => setText(event.target.value)}
                            value={text}
                            className="input"
                        />
                        <button onClick={add} className="add">
                            Add  #{tasks.length}
                        </button>
                    </div>
                    <ul className='task'>
                        {tasks.map((task) => (
                            <li className="task-each" id={task.id} key={task.id}>
                                <div>
                                    <input type="checkbox" onClick={() => checkedTask(task.id)} checked={task.checked} />
                                    <span style={{
                                        textDecoration: task.checked ? 'line-through' : 'none'
                                    }}>{task.task}</span>
                                </div>
                                <span onClick={() => deleteTask(task.id)}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}



export default MyTodo;
