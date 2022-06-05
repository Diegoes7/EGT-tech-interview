import React from "react";
import "./App.css";
import BetField from "./components/bet-field/bet-field.component";
import DrawField from "./components/draw-field/draw-field.component";
import GameBoard from "./components/game-board/game-board.component";
import Price from "./components/price-field/price-field.component";
import SelectedNumbers from "./components/selected-numbers/selected-numbers.component";

function App() {
	return (
		<div className="app">
			<GameBoard />
			<div className="group-fields">
				<BetField />
				<DrawField />
				<Price />
				<SelectedNumbers />
			</div>
		</div>
	);
}

export default App;
