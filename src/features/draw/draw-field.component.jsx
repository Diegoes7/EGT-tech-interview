import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementByAmount,
	increment,
	decrement,
} from "./drawSlice";

import {DrawButtonsModifier, DrawTitle, DrawFieldContainer} from "./draw-field.styles";
import {InputContainer, InputField} from '../betting/bet-field.styles.js'


const DrawField = () => {
	// get slice of the state and use in UI component
	const currentDraw = useSelector((state) => state.draw.draws);
	// trigger action to the store
	const dispatch = useDispatch();
	// set local state, just to try it, no particular reason
	const [draw, setDraw] = useState(currentDraw);

	// get event object and pass it to update the store
	//* validate to enter only whole numbers, and impelement a simple alert
	//* to notify user that do smt wrong, and reset the draw to initila state
	const onChangeHandler = (event) => {
		const { value } = event.target;
		const acceptedNumber = /^[0-9\b]+$/;
		if (value === "" || acceptedNumber.test(value)) {
			dispatch(incrementByAmount(Number(value)));
			setDraw(value);
		} else {
			setDraw(1);
			alert("No Correct Format");
		}
	};

	// input is type text because of the arrays is annoying
	return (
		<DrawFieldContainer>
			<DrawTitle>Теглене: {currentDraw}</DrawTitle>
			<InputContainer>
					<DrawButtonsModifier
						onClick={() => dispatch(increment())}
					>
						{" "}
						&#x2B;
					</DrawButtonsModifier>
					<DrawButtonsModifier
						onClick={() => dispatch(decrement())}
					>
						{" "}
						&minus;
					</DrawButtonsModifier>
				
				<InputField type="text" value={draw} onChange={onChangeHandler} />
			</InputContainer>
		</DrawFieldContainer>
	);
};

export default DrawField;
