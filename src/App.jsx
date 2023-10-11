import { useState } from 'react'
import './App.css'
import Card from '../src/components/card/Card'
import MyTodo from './components/MyToDo/myTodo'
import Water from '../src/components/water/Water'
import Counter from './components/counter/Counter';
import Note from './components/note/Note'
import ToDo from './components/todo/Todo'
import Chips from './components/chips/Chips'
import Prop from "./components/prop/Prop";

const changeMode = (mode) => {
    if (mode === 'black') {
        mode = 'white'
    } else {
        mode = 'white'
    }
}

function App() {
    const [pages, SetPage] = useState('Card')
    const [mode, setMode] = useState('white')
    const [color, setColor] = useState('black')
    const changeMode = () => {
        setMode(prevState => prevState == 'black' ? 'white' : 'black')
        setColor(prevState => prevState == 'white' ? 'black' : 'white')
    }    
    const changePage = () => {
        if (pages === 'Card') {
            return <Card />
        } else if (pages === 'MyToDo') {
            return <MyTodo />
        } else if (pages === 'Note') {
            return <Note />
        } else if (pages === 'Prop') {
            return <Prop back={mode} func={changeMode} color={color} />
        } else if (pages === 'Counter') {
            return <Counter />
        } else if (pages === 'ToDo') {
            return <ToDo />
        } else if (pages === 'Water') {
            return <Water />
        } else if (pages === 'Chips') {
            return <Chips />
        }
    }

    return (
        <div className='container'>
            <h1 className='logo'>React Home Work</h1>
            <div className="app-buttons">
                <button onClick={() => SetPage('Card')}>Card</button>
                <button onClick={() => SetPage('MyToDo')}>MyToDo</button>
                <button onClick={() => SetPage('Note')}>Note</button>
                <button onClick={() => SetPage('Prop')}>Prop</button>
                <button onClick={() => SetPage('Counter')}>Counter</button>
                <button onClick={() => SetPage('ToDo')}>Todo</button>
                <button onClick={() => SetPage('Water')}>Water</button>
                <button onClick={() => SetPage('Chips')}>Chips</button>
            </div>
            <div className='page-content'>{changePage()}</div>
        </div>
    );

}

export default App;