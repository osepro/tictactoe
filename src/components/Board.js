import React, { Component } from "react";
import Button from "./Button";
import PlayerTurn from "./PlayerTurn";
import "../styles/board.css";

const items = new Array(9).fill(null);
class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "X",
		};
		this.setPlayer = this.setPlayer.bind(this);
	}
	setPlayer(e) {
		if (e.target.value === "") {
			this.setState((prevState) => ({
				player: prevState.player === "X" ? "0" : "X",
			}));
			e.target.value = this.state.player;
		}
	}
	render() {
		const { player } = this.state;
		return (
			<div className="main">
				<PlayerTurn playsturn={player} />
				<div className="mainBoard">
					{items.map((item, index) => (
						<Button key={index} play={this.setPlayer} />
					))}
				</div>
			</div>
		);
	}
}

export default Board;
