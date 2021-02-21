import React from "react";

const MuteButton = ({ mute, sound }) => {
	return (
		<button onClick={mute} className="resetBtn">
			{sound ? "Mute" : "Unmute"}
		</button>
	);
};

export default MuteButton;
