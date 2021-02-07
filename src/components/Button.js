import React from "react";
import "../styles/button.css";

const Button = ({ play }) => {
	return (
		<div className="mainButton">
			<input type="button" onClick={play} className="playButton"></input>
		</div>
	);
};

export default Button;
