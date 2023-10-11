import { useState } from "react";
import './card.scss'
function Card() {
    const Allchange = [
        {
            back: 'pink',
            text: '1. Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
            author: 'Наполеон Хилл'
        },
        {
            back: 'aqua',
            text: '2. Стремитесь не к успеху, а к ценностям, которые он дает',
            author: 'Альберт Эйнштейн'
        },
        {
            back: 'yellow',
            text: '3. Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
            author: 'Флоренс Найтингейл'
        }
    ]

    const [change, setChange] = useState(0)
    const info = Allchange[change]
    const allChange = () => {
        const modify = (info + 1) % Allchange.length;

        setChange((change + 1) % Allchange.length)
    }
    return (
        <div className="container">
            <div className="card"
                style={{
                    backgroundColor: info.back
                }}
            >

                <div className="card-centre">
                    <p className="text">{info.text}</p>
                    <p className="author">{info.author}</p>
                    <button onClick={allChange} className="next" style={{
                        backgroundColor: info.back
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Card;