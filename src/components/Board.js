import React, { Component, createRef } from "react";
import Button from "components/Button";
import playaudio from "../sound/play.mp3";
import winneraudio from "sound/winner.mp3";
import PlayerTurn from "components/PlayerTurn";
import Reset from "components/Reset";
import MuteButton from "components/MuteButton";
import WinnerBoard from "components/WinnerBoard";
import { connect } from "react-redux";
import "../styles/board.css";
import * as actions from "actions";

let playBoard = new Array(9).fill(null);
let winner = "";
let winvalue = [];

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "X",
			boarditem: new Array(9).fill({ player: "", position: null }),
			mute: false,
		};
		this.setPlayer = this.setPlayer.bind(this);
		this.inputField = createRef();
	}

	playSoundFn = (audionfile) => {
		let playSound = new Audio(audionfile);
		playSound.play();
	};
	setPlayer(e) {
		const { player, boarditem, mute } = this.state;
		boarditem[e.target.getAttribute("data-item")] = {
			player: player,
			position: e.target.getAttribute("data-item"),
		};

		if (e.target.value === "") {
			this.setState((prevState) => ({
				player: prevState.player === "X" ? "0" : "X",
				boarditem,
			}));
			e.target.value = player;
			e.target.disabled = true;
			playBoard[e.target.getAttribute("data-item")] = player;
		}

		if (this.handleWinning() && !this.handleWinning().isDraw) {
			winner = player;
			this.props.saveWinners(player);
			if (mute) this.playSoundFn(winneraudio);
		}

		if (this.handleWinning() && this.handleWinning().isDraw) {
			winner = "Draw";
		}

		if (mute) this.playSoundFn(playaudio);
	}
	handleWinning = () => {
		let board = [];
		let isGameEnd = false;
		let isDraw = false;

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
				winvalue = [a, b, c];
			}
		}

		if (!board.includes(null)) {
			isGameEnd = true;
			isDraw = true;
			return {
				isDraw,
			};
		}

		return isGameEnd;
	};
	getWinningResult = () => {
		return winvalue;
	};
	resetGame = () => {
		winner = "";
		winvalue = [];
		playBoard = new Array(9).fill(null);
		this.setState({
			player: "X",
			boarditem: new Array(9).fill({ player: "", position: null }),
		});
	};
	muteGame = () => {
		this.setState((prevState) => ({
			mute: !prevState.mute,
		}));
	};
	render() {
		const { player, boarditem, mute } = this.state;
		const { savewinner } = this.props;
		return (
			<div className="main">
				{savewinner.length > 0 && <WinnerBoard winnerboard={savewinner} />}
				{winner === "Draw" && <h1 style={{ color: "#ffa500" }}>{winner}</h1>}
				{winner !== "Draw" && <PlayerTurn playsturn={player} winner={winner} />}
				<div className="mainBoard">
					{playBoard.map((_, index) => (
						<Button
							key={index}
							position={index}
							play={this.setPlayer}
							canplay={this.handleWinning()}
							winshown={this.getWinningResult()}
							boarditem={boarditem}
						/>
					))}
				</div>
				<div className="btnBottom">
					<MuteButton mute={this.muteGame} sound={mute} />
					{this.handleWinning() && <Reset reset={this.resetGame} />}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		savewinner: state.winner,
	};
};

export default connect(mapStateToProps, actions)(Board);
