const makeNoteReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "DELETE_NOTE":
      let findNote = state.data.splice(action.payload, 1);
      let updatedNotes = state.data.filter((item) => item !== findNote);
      return {
        ...state,
        data: updatedNotes,
      };

    default:
      return state;
  }
};

export default makeNoteReducer;
