import React from "react";
import "../styles/button.css";

const Reset = ({ reset }) => {
	return (
		<button onClick={reset} className="resetBtn">
			Restart Game
		</button>
	);
};

export default Reset;
