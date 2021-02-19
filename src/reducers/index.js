import { combineReducers } from "redux";
import winnerReducer from "./winners";

export default combineReducers({
	winner: winnerReducer,
});
