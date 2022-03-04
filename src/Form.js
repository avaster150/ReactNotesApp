import { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import {addNote} from "./actions"
const Form = () => {
    const [note, setNote] = useState("");
    const [time, setTime] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!note) {
            alert("Pusta notatka");
            return
        }
        const newNote = {note, time}
        setNote("")
        dispatch(addNote(newNote))
    }

    useEffect(() => {
        let createDate = new Date()
        let localCreateDate = createDate.toLocaleString()
        setTime(localCreateDate)
    }, [time]);

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
           
        </div>
     );
}
 
export default Form;