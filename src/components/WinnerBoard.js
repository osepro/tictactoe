import React from "react";
import "../styles/winnerboard.css";

const WinnerBoard = ({ winnerboard }) => {
	return (
		<div className="mainwinnerboard">
			<h4>Game History</h4>
			<ul className="winnerlist">
				{winnerboard.map((winner, index) => (
					<li key={index}>
						{winner} Won Game {index + 1}
					</li>
				))}
			</ul>
		</div>
	);
};

export default WinnerBoard;
