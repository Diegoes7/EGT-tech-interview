import { useSelector } from "react-redux";

import BetField from "./features/betting/bet-field.component";
import Comments from "./features/apiSlice/comments.component";
import DrawField from "./features/draw/draw-field.component";
import GameBoard from "./features/game-board/game-board.component";
import Price from "./features/price-field/price-field.component";
import SelectedNumbers from "./features/selected-numbers/selected-numbers.component";
import Timer from "./features/clock/timer.component";

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
