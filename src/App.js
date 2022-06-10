import { useSelector } from "react-redux";

import BetField from "./components/bet-field/bet-field.component";
import Comments from "./components/comments/comments.component";
import DrawField from "./components/draw-field/draw-field.component";
import GameBoard from "./components/game-board/game-board.component";
import Price from "./components/price-field/price-field.component";
import SelectedNumbers from "./components/selected-numbers/selected-numbers.component";

import "./App.css";
import Timer from "./components/timer/timer.component";

function App() {
	let loader = useSelector((state) => state.clock.loadStuff);

	return (
		<div className="app">
			<GameBoard />
			<div className="group-fields">
				<BetField />
				<DrawField />
				<Price />
				<SelectedNumbers />
				<Timer />
			</div>
			{loader && <Comments />}
		</div>
	);
}

export default App;
