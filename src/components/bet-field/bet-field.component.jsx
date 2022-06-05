import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementByAmount,
	increment,
	decrement,
	reset,
} from "../../features/betting/bettingSlice";
import "./bet-field.styles.css";

const BetField = () => {
	// set local state to show in the input to be empty, personal decision
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const currentBet = useSelector((state) => state.bet.bet);

	// get the event Object, and his value and pass it to the local state
	//* tthen fire action and pass value to the redux store, to update the state
	//* and sync with UI 
	const onChangeHandler = (event) => {
		const { value } = event.target;
		setInput(value)
		dispatch(incrementByAmount(Number(value)));
	};

	// reset bet and input, start over
	const resetBetToInitial = () => {
		setInput("")
		dispatch(reset());
	}
     //! use to fixed to show floating point number, still need to validate input to match the assignment
	 // use array function to be breaf and dont't cause performance issue
	 //* also to show that I heard of them
	 //use unicode cause is faster to implement
	return (
		<div className="bet-field">
			<label>
				{" "}
				Залог:
				<span>{currentBet.toFixed(2)}</span>
				<div>
					<button className="bet-buttons" onClick={() => dispatch(increment())}>&#x2B;</button>
					<button className="bet-buttons" onClick={() => dispatch(decrement())}>&minus;</button>
				</div>
				<input
					type="text"
					name="betInput"
					value={input}
					autoFocus
					onChange={onChangeHandler}
				/>
				<span> лв.</span>
			</label>
			<button className="reset" onClick={resetBetToInitial}>Reset</button>
		</div>
	);
};

export default BetField;
