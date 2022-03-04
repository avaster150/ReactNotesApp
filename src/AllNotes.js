import { useSelector } from "react-redux";
const AllNotes = () => {
    const allNotes = useSelector(state => state.allNotes)
    return ( 
    <div className="notes-container">
        <h1>Lastest notes</h1>
        {allNotes.data.map((singleNote, index) => (
            <div key={index} className="single-note">
                <div className="text-container">
                    <div className="note-body">{singleNote.note}</div>
                    <p className="date">{singleNote.time}</p>
                </div>
                <div className="button-container">
                    <button onClick={console.log(singleNote.note)}>Delete note</button>
                </div>
            </div>

        ))}
    </div>
   );
}
 
export default AllNotes;