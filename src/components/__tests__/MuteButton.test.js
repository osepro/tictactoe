import React from "react";
import MuteButton from "components/MuteButton";
import { shallow } from "enzyme";

describe("Default mute button", () => {
	let wrapped;
	const btnClicked = jest.fn();
	beforeEach(() => {
		wrapped = shallow(<MuteButton mute={btnClicked} sound={false} />);
	});
	it("contains mute button", () => {
		expect(wrapped.find("button").text()).toEqual("Unmute");
	});

	it("button click function called", () => {
		wrapped.find("button").simulate("click");
		expect(btnClicked).toHaveBeenCalled();
	});
});

describe("Default unmute button", () => {
	let wrapped;
	const btnClicked = jest.fn();
	beforeEach(() => {
		wrapped = shallow(<MuteButton mute={btnClicked} sound={true} />);
	});
	it("contains unmute button", () => {
		expect(wrapped.find("button").text()).toEqual("Mute");
	});

	it("button click function called", () => {
		wrapped.find("button").simulate("click");
		expect(btnClicked).toHaveBeenCalled();
	});
});
