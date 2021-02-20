import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Header from "containers/Header";

let wrapped;

beforeEach(() => {
	wrapped = shallow(<Header />);
});

it("shows TIC TAC TOE", () => {
	expect(wrapped).toMatchSnapshot();
});

it("containers header title", () => {
	expect(wrapped.render().text()).toContain("TIC TAC TOE");
});
