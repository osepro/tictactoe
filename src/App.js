import Board from "./components/Board";
import Header from "./containers/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header game={""} />
			<Board />
		</div>
	);
}

export default App;
