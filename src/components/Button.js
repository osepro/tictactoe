import React from "react";
import "../styles/button.css";

const Button = ({ play, position, canplay, winshown, boarditem }) => {
	const [a, b, c] = winshown;
	return (
		<div className="mainButton">
			<input
				type="button"
				onClick={play}
				data-item={position}
				value={boarditem[position].player}
				className="playButton"
				disabled={canplay}
				style={{
					background:
						position === a || position === b || position === c
							? "#00FF00"
							: "#000000",
				}}
			></input>
		</div>
	);
};

export default Button;
