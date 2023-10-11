import { useState } from 'react';
import './note.scss'
function Note() {
    const [notes, setNote] = useState([]);
    const [name, setName] = useState('');
    const [telephone, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const addNote = () => {
        if(name.length !=0 && telephone.length !=0 && email.length !=0){
            const newNote = {
                id: Math.floor(Math.random() * 1000000),
                name: name,
                telephone: telephone,
                email: email
            }
            setNote((prevState) => [...prevState, newNote])
            setName('');
            setNumber('');
            setEmail('');
        }
    };
    const deleteNote = (id) => {
        const filterNote = notes.filter((item) => item.id !== id)
        setNote(filterNote)
    }
    return (
        <div className="container">
            <div className="note">
                <div className="note-navi">
                    <h3>Add contact</h3>
                    <p>Name</p>
                    <input type="text"
                        onChange={(event) => setName(event.target.value)}
                        value={name} />
                    <p>Telephone</p>
                    <input type="text" onChange={(event) => setNumber(event.target.value)} value={telephone} />
                    <p>Email</p>
                    <input type="text" onChange={(event) => setEmail(event.target.value)} value={email} />
                    <button onClick={addNote}>Add</button>
                </div>

                <div className="note-table">
                    <h3>Contact list</h3>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {notes.map((item) => (
                                <tr id={item.id}>
                                    <td><span>{item.name}</span></td>
                                    <td><span>{item.telephone}</span></td>
                                    <td><span>{item.email}</span></td>
                                    <td><button onClick={()=>{deleteNote(item.id)}}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
export default Note;