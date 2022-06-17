import { useSelector, useDispatch } from "react-redux";
import { disabledBtns, enableBtns } from "../button/buttonSlice";

import ButtonNumber from "../button/button-number.component";
import { GameBoardContainer } from "./game-board.styles";

const GameBoard = () => {
	// connect state to component and visualize state
	// get slice of the state
	const dispatch = useDispatch();
	const board = useSelector((state) => state.button.board);
	let selectedBtns = useSelector((state) => state.button.selectedNumbers);

	// need a condition =12 selected elements, so
	selectedBtns.length === 12
		? dispatch(disabledBtns())
		: dispatch(enableBtns());

	const startingBoard = board.map((cur, inx) => (
		<ButtonNumber
			key={inx}
			value={++inx}
			disabled={cur.disabled}
			id={inx++}
			selected={cur.selected}
		/>
	));

	return (
		//* pass throught the array and fill the Button elemnent
		//* with props/ values
		// <h2>Lucky Number Slevin</h2>
		<GameBoardContainer>
			{startingBoard ? startingBoard : "No Board"}
		</GameBoardContainer>
	);
};

export default GameBoard;
