import makeNoteReducer from "./makeNote";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  allNotes: makeNoteReducer,
});

export default allReducers;
