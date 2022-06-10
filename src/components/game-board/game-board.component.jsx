import { useSelector, useDispatch } from "react-redux";
import { disabledBtns, enableBtns } from "../../features/button/buttonSlice";

import ButtonNumber from "../button-number/button-number.component";
import "./game-board.styles.css";

const GameBoard = () => {
	// connect state to component and vilualize state
	// get slice of the state
	const dispatch = useDispatch();
	const board = useSelector((state) => state.button.board);
	let selectedBtns = useSelector((state) => state.button.selectedNumbers);
	// console.log(selectedBtns.length);
	// need a condition =12 selected elements, so
	selectedBtns.length === 12 ?
		dispatch(disabledBtns())
		: dispatch(enableBtns());
	

	return (
		//* pass throught the array and fill the Button elemnent
		//* with props/ values
		// <h2>Lucky Number Slevin</h2>
		<div className="gameBoard">
			{board.map((cur, inx) => {
				return (
					<ButtonNumber
						key={inx}
						value={++inx}
						disabled={cur.disabled}
						id={inx++}
						selected={cur.selected}
					/>
				);
			})}
		</div>
	);
};

export default GameBoard;
