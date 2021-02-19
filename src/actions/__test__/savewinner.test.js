import { SAVE_WINNER } from "constants/types";
import { saveWinners } from "actions";

describe("Save Winner", () => {
	let data;
	beforeEach(() => {
		data = saveWinners("Ose");
	});
	it("check actions constants", () => {
		expect(data.type).toEqual(SAVE_WINNER);
	});

	it("check actions data", () => {
		expect(data.winner).toEqual("Ose");
	});
});
