import { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import {addNote} from "./actions"
const Form = () => {
    const [note, setNote] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!note) {
            alert("Pusta notatka");
            return
        }
        const newNote = {note, time}
        setNotes([...notes, newNote])
        setNote("")
        dispatch(addNote(newNote))
    }

    useEffect(() => {
        let createDate = new Date()
        let localCreateDate = createDate.toLocaleString()
        setTime(localCreateDate)
    }, [notes]);

    return ( 
        <div className="form-area">
            <form onSubmit={handleSubmit}>
                <label>Note</label>
                <div className="form-text">
                <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="10"
                cols="150"
                ></textarea>
                <button>Add note</button>
                </div>
            </form>
            <div className="show">
            {notes && notes.map((note, index) => (
                <p key={index}>{note.note} {note.time}</p>
            ))}
            </div>
        </div>
     );
}
 
export default Form;