import React from "react";
import ReactDOM from "react-dom";
import Header from "containers/Header";

it("shows TIC TAC TOE", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header />, div);
	expect(div.innerHTML).toContain("TIC TAC TOE");
	ReactDOM.unmountComponentAtNode(div);
});
