import React from "react";
import MuteButton from "components/MuteButton";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

describe("Default mute button", () => {
	let wrapped;
	const btnClicked = jest.fn();
	beforeEach(() => {
		wrapped = shallow(<MuteButton mute={btnClicked} sound={false} />);
	});
	it("contains mute button", () => {
		const unmute = <FontAwesomeIcon icon={faVolumeMute} />;
		expect(wrapped.find(unmute)).toBeTruthy();
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
		const mute = <FontAwesomeIcon icon={faVolumeUp} />;
		expect(wrapped.find(mute)).toBeTruthy();
	});

	it("button click function called", () => {
		wrapped.find("button").simulate("click");
		expect(btnClicked).toHaveBeenCalled();
	});
});
