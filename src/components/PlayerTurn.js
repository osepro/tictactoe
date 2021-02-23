import React from "react";

const PlayerTurn = ({ playsturn, winner }) => {
	return (
		<h1>
			{winner === "Draw" && <span style={{ color: "#ffa500" }}>DRAW</span>}
			{winner === "" ? (
				<span className="playturname">
					Player{" "}
					<span
						style={{ color: `${playsturn === "X" ? "#ffa500" : "#0000FF"}` }}
					>
						{playsturn}
					</span>{" "}
					your turn
				</span>
			) : (
				<span className="winnername">
					PLAYER{" "}
					<span style={{ color: `${winner === "X" ? "#ffa500" : "#0000FF"}` }}>
						{winner}
					</span>{" "}
					WINS
				</span>
			)}
		</h1>
	);
};

export default PlayerTurn;
