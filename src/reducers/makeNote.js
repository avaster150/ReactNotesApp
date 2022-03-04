const makeNoteReducer = (state = {data: []}, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case 'DELETE_NOTE':
            return console.log("delete");
        default:
            return state;
    }
}

export default makeNoteReducer