import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_NOTE } from "../store/actions";
const AllNotes = () => {
  const allNotes = useSelector((state) => state.allNotes);
  allNotes.data.sort((a, b) => {
    return new Date(b.time) - new Date(a.time);
  });
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(DELETE_NOTE(index));
  };

  return (
    <div className="notes-container">
      <h1>{allNotes.data[0] ? "Lastest Notes" : "Add your note!"}</h1>
      {allNotes.data.map((singleNote, index) => (
        <div key={index} className="single-note">
          <div className="text-container">
            <div className="note-body">{singleNote.note}</div>
            <Link to={`/note/${index}`} className="date">
              {singleNote.time}
            </Link>
          </div>
          <div className="button-container">
            <button onClick={() => handleDelete(index)}>Delete note</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
