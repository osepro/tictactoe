import React, { useState } from "react";
import Button from "./Button";
import "../styles/board.css";

const Board = () => {
	const items = new Array(9).fill(null);
	const [player, setPlayer] = useState(true);
	//const [play, setPlay] = useState();
	return (
		<div className="mainBoard">
			{items.map((item, index) => (
				<Button key={index} boardItem={index} />
			))}
		</div>
	);
};

export default Board;
