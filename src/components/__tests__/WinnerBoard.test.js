import React from "react";
import WinnerBoard from "components/WinnerBoard";
import { shallow } from "enzyme";

describe("test winnerboard", () => {
	let data, div;
	beforeEach(() => {
		data = ["X", "0"];
		div = shallow(<WinnerBoard winnerboard={data} />);
	});

	it("contains right number of li", () => {
		expect(div.find("li").length).toEqual(2);
	});

	it("contains all text", () => {
		expect(div.render().text()).toContain("Game History");
		expect(div.render().text()).toContain("X Won Game 1");
		expect(div.render().text()).toContain("0 Won Game 2");
	});

	it("contains li of winners", () => {
		expect(div.find("li").first().text()).toEqual("X Won Game 1");
	});
});
