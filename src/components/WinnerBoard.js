import React from "react";
import "../styles/winnerboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const boardResult = (data) => {
	for (const property in data) {
		return (
			<ul className="winnerlist">
				<li className="leader">
					<FontAwesomeIcon icon={faStar} /> {property} total win{" "}
					{data[property]}
				</li>
			</ul>
		);
	}
};

const WinnerBoard = ({ winnerboard }) => {
	let data = winnerboard.reduce(
		(acc, i) => ({
			...acc,
			[i]: acc[i] > 0 ? acc[i] + 1 : 1,
		}),
		{}
	);

	let scores = Object.keys(data);
	let leaderBoard = {};
	leaderBoard = { ...data };
	if (scores.length > 1) {
		let max = 0;

		for (const item in data) {
			if (data[item] > max) {
				leaderBoard = {};
				max = data[item];
				leaderBoard[item] = data[item];
			}
		}
	}

	return (
		<div className="mainwinnerboard">
			<h4>Leader Board</h4>
			{boardResult(leaderBoard)}
			<h4>Game History</h4>
			<ul className="winnerlist">
				{winnerboard.map((winner, index) => (
					<li key={index} className="innerList">
						{winner} Won Game {index + 1}
					</li>
				))}
			</ul>
		</div>
	);
};

export default WinnerBoard;
