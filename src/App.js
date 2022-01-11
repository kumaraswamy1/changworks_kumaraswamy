import "./App.css";
import { GlobalHotKeys } from "react-hotkeys";
import chang from "./utils/Confetti.js";

const App = () => {
	const keyMap = {
		changKey: "c h a n g w o r k s",
	};

	const handlers = {
		changKey: () => chang(),
	};
	return (
		<GlobalHotKeys keyMap={keyMap} handlers={handlers}>
			<div className="App">
				<h1>Type "changworks" </h1>
			</div>
			{}
		</GlobalHotKeys>
	);
};

export default App;
