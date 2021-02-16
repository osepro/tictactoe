import React from "react";
import { mount } from "enzyme";
import Board from "components/Board";
import Button from "components/Button";
import Reset from "components/Reset";

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
