import { useSelector } from "react-redux";

import BetField from "./components/bet-field/bet-field.component";
import Comments from "./components/comments/comments.component";
import DrawField from "./components/draw-field/draw-field.component";
import GameBoard from "./components/game-board/game-board.component";
import Price from "./components/price-field/price-field.component";
import SelectedNumbers from "./components/selected-numbers/selected-numbers.component";
import Timer from "./components/timer/timer.component";

import {
	AppContainer,
	GameFeaturesContainer,
	WrapperTimeComment,
} from "./App.styles.js";

function App() {
	let loader = useSelector((state) => state.clock.loadStuff);

	return (
		<AppContainer>
			<GameBoard />
			<GameFeaturesContainer>
				<BetField />
				<DrawField />
				<Price />
				<SelectedNumbers />
			</GameFeaturesContainer>
			<WrapperTimeComment>
				{loader && <Comments />}
				<Timer />
			</WrapperTimeComment>
		</AppContainer>
	);
}

export default App;
