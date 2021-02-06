import React, { useState, useEffect, useRef } from "react";
import "../styles/button.css";

const Button = ({ boardItem, play }) => {
	const [item, setItem] = useState("");
	const [player, setPlayer] = useState("");

	return (
		<div className="mainButton">
			<button className="playButton" onClick={() => setPlayer(boardItem)}>
				{player}
			</button>
		</div>
	);
};

export default Button;
