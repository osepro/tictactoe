import React from "react";
import "../styles/button.css";

const Button = ({ play, position }) => {
	return (
		<div className="mainButton">
			<input
				type="button"
				onClick={play}
				data-item={position}
				className="playButton"
			></input>
		</div>
	);
};

export default Button;
