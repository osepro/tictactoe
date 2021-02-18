import React from "react";
import Reset from "../Reset";
import { shallow } from "enzyme";

it("contains reset button", () => {
	const wrapper = shallow(<Reset />);
	expect(wrapper.find("button").text()).toEqual("Restart Game");
});
