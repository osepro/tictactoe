import React from "react";
import "../styles/button.css";

const Button = ({ boardItem }) => {
	return (
		<div className="mainButton">
			<button className="playButton">{}</button>
		</div>
	);
};

export default Button;
