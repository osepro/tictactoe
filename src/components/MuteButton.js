import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const MuteButton = ({ mute, sound }) => {
	return (
		<button onClick={mute} className="resetBtn">
			{sound ? (
				<FontAwesomeIcon icon={faVolumeMute} />
			) : (
				<FontAwesomeIcon icon={faVolumeUp} />
			)}
		</button>
	);
};

export default MuteButton;
