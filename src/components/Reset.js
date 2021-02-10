import React from "react";
import "../styles/button.css";

const Reset = ({ reset }) => {
	return (
		<div className="mainButton">
			<button onClick={reset} className="resetBtn">
				Restart Game
			</button>
		</div>
	);
};

export default Reset;
