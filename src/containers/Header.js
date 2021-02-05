import React, { useState } from "react";

const Header = ({ game }) => {
	return (
		<div>
			<h1>TIC TAC TOE</h1>
			<p>{game}</p>
		</div>
	);
};

export default Header;
