import React, { Component } from "react";
import Button from "./Button";
import PlayerTurn from "./PlayerTurn";
import "../styles/board.css";

const playBoard = new Array(9).fill(null);

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "X",
		};
		this.setPlayer = this.setPlayer.bind(this);
	}
	setPlayer(e) {
		const { player } = this.state;
		if (e.target.value === "") {
			this.setState((prevState) => ({
				player: prevState.player === "X" ? "0" : "X",
			}));
			e.target.value = player;
			playBoard[e.target.getAttribute("data-item")] = player;
		}

		if (this.handleWinning()) {
			alert(`${player} WON`);
		}
	}
	handleWinning = () => {
		let board = [];
		let isGameEnd = false;

		for (let j = 0; j < playBoard.length; j++) {
			board = [...board, playBoard[j]];
		}

		const winningConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const i in winningConditions) {
			const [a, b, c] = winningConditions[i];

			if (
				board[a] === board[b] &&
				board[b] === board[c] &&
				board[a] !== null &&
				board[b] !== null &&
				board[c] !== null
			) {
				isGameEnd = true;
			}
		}
		return isGameEnd;
	};
	render() {
		const { player } = this.state;
		return (
			<div className="main">
				<PlayerTurn playsturn={player} />
				<div className="mainBoard">
					{playBoard.map((_, index) => (
						<Button key={index} position={index} play={this.setPlayer} />
					))}
				</div>
			</div>
		);
	}
}

export default Board;
