import React from "react";
import { shallow, mount } from "enzyme";
import Button from "components/Button";

const boarditem = [{ player: "", position: null }];
describe("button mount and snapshot", () => {
	let wrapped;
	beforeEach(() => {
		wrapped = mount(
			<Button
				position={0}
				play={(e) => {
					boarditem[0] = {
						player: "X",
						position: 0,
					};
				}}
				canplay={true}
				winshown={[]}
				boarditem={boarditem}
			/>
		);
	});
	afterEach(() => {
		wrapped.unmount();
	});

	it("contains input", () => {
		expect(wrapped).toMatchSnapshot();
	});
	it("contains button with value", () => {
		let eachPlay = wrapped.find("input");
		eachPlay.props().onClick();
		expect(wrapped.find(Button).prop("boarditem")).toEqual([
			{ player: "X", position: 0 },
		]);
	});
});

it("button click function called", () => {
	const btnClicked = jest.fn();
	const wrapped = shallow(
		<Button
			position={0}
			play={btnClicked}
			canplay={true}
			winshown={[]}
			boarditem={boarditem}
		/>
	);
	wrapped.find("input").simulate("click");
	expect(btnClicked).toHaveBeenCalled();
});
