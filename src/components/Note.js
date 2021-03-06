import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DELETE_NOTE } from "../store/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Note = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const singleNote = useSelector((state) => state.allNotes.data[id]);
  const history = useHistory();

  const handleDelete = () => {
    dispatch(DELETE_NOTE(id));
    let path = `/`;
    history.push(path);
  };

  if (singleNote) {
    return (
      <div className="single-note-container">
        <div className="single-note-button-container">
          <Link to="/" className="back-button">
            Go back
          </Link>
          <button onClick={handleDelete} className="delete-button">
            Delete note
          </button>
        </div>
        <div className="note-box">
          <div className="note-txt">{singleNote.note}</div>
          <div className="note-date">{singleNote.time}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="error-page">
        <h1>
          <i className="fas fa-exclamation-triangle"></i> 404
        </h1>
        <h2>Oops... Page Not Found</h2>
        <Link class="go-back" to="/">
          Go to home page
        </Link>
      </div>
    );
  }
};

export default Note;
