let lsNotes, storedNotes, newNotes;
const makeNoteReducer = (
  state = { data: JSON.parse(localStorage.getItem("notes")) || [] },
  action
) => {
  switch (action.type) {
    case "ADD_NOTE":
      lsNotes = localStorage.getItem("notes") || "[]";
      storedNotes = JSON.parse(lsNotes);
      newNotes = [...storedNotes, action.payload];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "DELETE_NOTE":
      lsNotes = localStorage.getItem("notes") || "[]";
      storedNotes = JSON.parse(lsNotes);
      const findStorageNote = storedNotes.splice(action.payload, 1);
      newNotes = storedNotes.filter((item) => item !== findStorageNote);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      const findNote = state.data.splice(action.payload, 1);
      const updatedNotes = state.data.filter((item) => item !== findNote);
      return {
        ...state,
        data: updatedNotes,
      };

    default:
      return state;
  }
};

export default makeNoteReducer;
