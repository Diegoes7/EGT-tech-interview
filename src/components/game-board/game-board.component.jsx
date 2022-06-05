import { useDispatch, useSelector } from "react-redux";

import ButtonNumber from "../button-number/button-number.component";
import "./game-board.styles.css";

const GameBoard = () => {
	// connect state to component and vilualize state
	// get slice of the state
	const board = useSelector((state) => state.button.board);

	return (
		//* pass throught the array and fill the Button elemnent
		//* with props/ values
		// <h2>Lucky Number Slevin</h2>
		<div className="gameBoard">
			{board &&
				board.map((cur, inx) => {
					return (
						<ButtonNumber
							key={inx}
							value={++inx}
							id={inx++}
							selected={cur.selected}
						/>
					);
				})}
		</div>
	);
};

export default GameBoard;
