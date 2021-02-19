import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Root>
			<App />
		</Root>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
