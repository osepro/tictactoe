import React from "react";
import WinnerBoard from "components/WinnerBoard";
import { shallow } from "enzyme";

describe("test winnerboard", () => {
	let data, div;
	beforeEach(() => {
		data = ["X", "0"];
		div = shallow(<WinnerBoard winnerboard={data} />);
	});
	it("contains li of winners", () => {
		expect(div.find("li").first().text()).toEqual("X Won Game 1");
	});

	it("contains right number of li", () => {
		expect(div.find("li").length).toBe(2);
	});
});
