import React from "react";
import PlayerTurn from "components/PlayerTurn";
import { shallow } from "enzyme";

it("shows player turn X", () => {
	const wrapped = shallow(<PlayerTurn playsturn={"X"} winner={""} />);
	expect(wrapped.find(".playturname").render().text()).toEqual(
		"Player X your turn"
	);
});

it("shows player X win", () => {
	const wrapped = shallow(<PlayerTurn playsturn={"X"} winner={"X"} />);
	expect(wrapped.find("span").first().render().text()).toEqual("PLAYER X WINS");
});

it("shows player turn 0", () => {
	const wrapped = shallow(<PlayerTurn playsturn={"0"} winner={""} />);
	expect(wrapped.find(".playturname").render().text()).toEqual(
		"Player 0 your turn"
	);
});

it("shows player 0 wins", () => {
	const wrapped = shallow(<PlayerTurn playsturn={"0"} winner={"0"} />);
	expect(wrapped.find("span").first().render().text()).toEqual("PLAYER 0 WINS");
});

it("shows draw for the game", () => {
	const wrapped = shallow(<PlayerTurn playsturn={"X"} winner={"Draw"} />);
	expect(wrapped.find("span").first().render().text()).toEqual("DRAW");
});
