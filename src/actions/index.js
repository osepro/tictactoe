import { SAVE_WINNER } from "constants/types";

export function saveWinners(winner) {
	return {
		type: SAVE_WINNER,
		winner,
	};
}
