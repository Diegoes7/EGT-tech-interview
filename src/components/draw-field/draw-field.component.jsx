import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementByAmount,
	increment,
	decrement,
} from "../../features/draw/drawSlice";

import './draw-field.styles.css'

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
		<div className="draw-field">
			<label>
				{" "}
				Теглене:
				<span>{currentDraw}</span>
				<div className="draw-buttons">
					<button
						className="draw-button-plus"
						onClick={() => dispatch(increment())}
					>
						{" "}
						&#x2B;
					</button>
					<button
						className="draw-button-plus"
						onClick={() => dispatch(decrement())}
					>
						{" "}
						&minus;
					</button>
				</div>
				<input type="text" value={draw} onChange={onChangeHandler} />
				<span> лв.</span>
			</label>
		</div>
	);
};

export default DrawField;
