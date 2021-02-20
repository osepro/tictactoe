import React from "react";
import Root from "Root";
import { mount } from "enzyme";
import App from "App";
import Board from "components/Board";
import Header from "containers/Header";

it("contains the main components", () => {
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);
	expect(wrapped.find(Board).length).toEqual(1);
	expect(wrapped.find(Header).length).toEqual(1);
});
