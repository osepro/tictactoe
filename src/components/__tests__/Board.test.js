import React from "react";
import { mount } from "enzyme";
import Board from "components/Board";
import Button from "components/Button";

let wrapped;

beforeEach(() => {
	wrapped = mount(<Board />);
});

afterEach(() => {
	wrapped.unmount();
});

it("has play button component", () => {
	expect(wrapped.find(Button).length).toEqual(9);
});

it("can click on button", () => {
	expect(wrapped.find(Button).first().find("input").prop("value")).toEqual("");
});
