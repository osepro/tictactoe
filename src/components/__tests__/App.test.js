import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import Board from "components/Board";
import Header from "containers/Header";

let wrapper;
beforeEach(() => {
	wrapper = shallow(<App />);
});

it("shows board and header components", () => {
	expect(wrapper.find(Board).length).toEqual(1);
});

it("shows header components", () => {
	expect(wrapper.find(Header).length).toEqual(1);
});
