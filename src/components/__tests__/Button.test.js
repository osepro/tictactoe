import React from "react";
import { mount } from "enzyme";
import Button from "components/Button";

const boarditem = [{ player: "", position: null }];
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

it("contains button with value", () => {
	let eachPlay = wrapped.find("input");
	eachPlay.props().onClick();
	expect(wrapped.find(Button).prop("boarditem")).toEqual([
		{ player: "X", position: 0 },
	]);
});
