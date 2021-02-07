import React from "react";

const PlayerTurn = ({ playsturn }) => {
	return (
		<h1>
			Player{" "}
			<span style={{ color: `${playsturn === "X" ? "#ffa500" : "#0000FF"}` }}>
				{playsturn}
			</span>{" "}
			your turn
		</h1>
	);
};

export default PlayerTurn;
