import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementByAmount,
	increment,
	decrement,
	reset,
} from "../../features/betting/bettingSlice";
import {
	BetFieldContainer,
	InputContainer,
	InputField,
	ActionButtons,
	BetModifyingButtons,
	FinalBet,
} from "./bet-field.styles.js";

const BetField = () => {
	// set local state to show in the input to be empty, personal decision
	const [input, setInput] = useState("1.00");
	const dispatch = useDispatch();
	const currentBet = useSelector((state) => state.bet.bet);
	console.log(currentBet.toFixed(2));

	// get the event Object, and his value and pass it to the local state
	//* tthen fire action and pass value to the redux store, to update the state
	//* and sync with UI
	const onChangeHandler = (event) => {
		let { value } = event.target;
		value =
			value.indexOf(".") >= 0
				? value.substr(0, value.indexOf(".")) +
				  value.substr(value.indexOf("."), 3)
				: value;
		setInput(value);
		// dispatch(incrementByAmount(value));
	};

	const onSubmitHandler = () => {
		dispatch(incrementByAmount(input));
	};

	// reset bet and input, start over
	const resetBetToInitial = () => {
		setInput("");
		dispatch(reset());
	};
	//! use to fixed to show floating point number, still need to validate input to match the assignment
	// use array function to be breaf and dont't cause performance issue
	//* also to show that I heard of them
	//use unicode cause is faster to implement
	return (
		<BetFieldContainer>
			{" "}
			<FinalBet>Залог: {currentBet.toFixed(2)}</FinalBet>
			<InputContainer>
				<div>
					<BetModifyingButtons onClick={() => dispatch(increment())}>
						&#x2B;
					</BetModifyingButtons>
					<BetModifyingButtons onClick={() => dispatch(decrement())}>
						&minus;
					</BetModifyingButtons>
				</div>
				<InputField
					autoFocus
					type="text"
					name="betInput"
					value={input}
					onChange={onChangeHandler}
				/>
				<span> лв.</span>
			</InputContainer>
			<ActionButtons onClick={onSubmitHandler}>Заложи</ActionButtons>
			<ActionButtons onClick={resetBetToInitial}>Изтрий</ActionButtons>
		</BetFieldContainer>
	);
};

export default BetField;
