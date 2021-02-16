import React from "react";
import Reset from "../Reset";
import { shallow } from "enzyme";

it("contains reset button", () => {
	const wrapper = shallow(<Reset />);
	expect(wrapper.html()).toEqual(
		'<div class="mainButton"><button class="resetBtn">Restart Game</button></div>'
	);
});
