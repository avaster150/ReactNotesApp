import { useSelector } from "react-redux";
const AllNotes = () => {
    const allNotes = useSelector(state => state.allNotes)
    return ( 
    <div className="notes-container">
                {/* {console.log(allNotes)} */}
        <h1>Lastest notes</h1>
        {!allNotes && allNotes.allNotes.map(ar => (
            <div key={ar.id} className="single-note">
                <div className="text-container">
                    <p className="body">{ar.note}</p>
                    <p className="date">{ar.time}</p>
                </div>
                <div className="button-container">
                    <button>Delete note</button>
                </div>
            </div>

        ))}
    </div>
   );
}
 
export default AllNotes;