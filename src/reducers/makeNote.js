const makeNoteReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                allNotes: [state, action.payload]
            };

        case 'DELETE_NOTE':
            return console.log("delete");
        default:
            return state;
    }
}

export default makeNoteReducer