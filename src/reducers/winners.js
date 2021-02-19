import { SAVE_WINNER } from "constants/types";

export default function winnerReducer(state = [], action) {
	switch (action.type) {
		case SAVE_WINNER:
			return [...state, action.winner];
		default:
			return state;
	}
}
