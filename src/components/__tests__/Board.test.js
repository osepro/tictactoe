import React from "react";
import { mount, shallow } from "enzyme";
import Board from "components/Board";
import winneraudio from "sound/winner.mp3";
import Button from "components/Button";
import Root from "Root";

describe("mount board component", () => {
	let wrapped;
	beforeEach(() => {
		wrapped = mount(
			<Root>
				<Board />
			</Root>
		);
	});

	afterEach(() => {
		wrapped.unmount();
	});

	it("has play button component", () => {
		expect(wrapped.find(Button).length).toEqual(9);
	});

	it("can click on button", () => {
		expect(wrapped.find(Button).first().find("input").prop("value")).toEqual(
			""
		);
	});
});

it("sound play working", () => {
	const wrapper = shallow(
		<Root>
			<Board />
		</Root>
	);
	//let instance = wrapper.instance().handleWinning();
	//console.log(instance.handleWinning());
	//console.log(wrapper.instance().handleWinning());
	//expect(wrapper.dive().instance().playSoundFn(winneraudio)).toBeTruthy();
});
