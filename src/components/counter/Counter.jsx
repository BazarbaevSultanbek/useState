import { useState } from 'react';
import './counter.scss'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCounter] = useState(0)
    const inc = () => {
        setCount((prev) => prev + 1);
    }
    const imp = ()=>{
        setCounter((prev) => prev + 1);
    }
    return (
        <div className="container">
            <div className="counter-block">
                <div className="counter-block-inner">
                    <h1>Hello</h1>
                    <p>It's first component</p>
                    <button onClick={inc}>Click</button>
                    I have been toggled {count} times
                </div>
                <div className="counter-block-inner">
                    <h1>Hi</h1>
                    <p>It's second component</p>
                    <button onClick={imp}>Click</button>
                    I have been toggled {count2} times
                </div>
            </div>
        </div>
    )
}

export default Counter;