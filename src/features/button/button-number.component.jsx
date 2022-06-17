import { useDispatch } from "react-redux";
import { toggleBtn } from "./buttonSlice";

import {TheButton} from "./button-number.styles";

// pass props form game board component to populate values
const ButtonNumber = ({ id, value, selected, disabled }) => {
	// trigger action to the redux store
	const dispatch = useDispatch();
	// console.log(currentBoard);

	//* get target element and pass it to the store to update state
	//* flip the component state
	const handleButton = (e) => {
		// const currentEl = e.target;
		const { id } = e.target;
		// console.log(id);
		// console.log(currentEl);
		dispatch(toggleBtn(id));
		// disabled(disabledBtns())
	};
	console.log();

	return (
		<TheButton
			className="button"
			id={id}
			disabled={disabled}
			onClick={handleButton}
		>
			{selected ? value : "X"}
		</TheButton>
	);
};

export default ButtonNumber;
