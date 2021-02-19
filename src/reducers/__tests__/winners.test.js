import winnerReducer from "reducers/winners";
import { SAVE_WINNER } from "constants/types";

it("handles action type SAVE_WINNER", () => {
	const action = {
		type: SAVE_WINNER,
		winner: "Ose",
	};

	const newState = winnerReducer([], action);

	expect(newState).toEqual(["Ose"]);
});

it("fails to handle action type SAVE_WINNER", () => {
	const action = {
		type: "DEMO_TEST",
		winner: "Ose",
	};

	const newState = winnerReducer([], action);

	expect(newState).toEqual([]);
});
