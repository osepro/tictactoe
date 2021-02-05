import React, { useState } from "react";
import Button from "./Button";
import "../styles/board.css";

const Board = () => {
	const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const [play, setPlay] = useState();
	return (
		<div className="mainBoard">
			{items.map((item, index) => (
				<Button key={index} boardItem={index} />
			))}
		</div>
	);
};

export default Board;
