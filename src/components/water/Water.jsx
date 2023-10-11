import { useState } from 'react'
import './water.scss'

function Water() {
    const [degree, setDegree] = useState(0)
    const inc = () => {
        setDegree((prev) => prev + 1)
    }
    const dbInc = () => {
        setDegree(prev => prev + 10)
    }
    const dec = () => {
        setDegree((prev) => prev - 1)
    }
    const dbDec = () => {
        setDegree(prev => prev - 10)
    }
    let name;
    let back;
    let color;
    if (degree >= 100) {
        name = 'Vapor',
        back = "red"
        color = 'white'

    } else if (degree <= 0) {

        name = 'Ice'
        back = 'aqua'
        color = 'black'
    }
    else {
        name = 'Water';
        back = 'blue'
        color = 'white'

    }
    return (
        <div className="container">
           <div className="water">
           <p style={{
                backgroundColor: back,
                color : color
            }} className="shower">{name} {degree}</p>
            <div className="water-block">
                <button onClick={inc}>+</button>
                <button onClick={dbInc}>+10</button>
                <button onClick={dec}>-</button>
                <button onClick={dbDec}>-10</button>
            </div>
           </div>
        </div>
    )
}
export default Water;