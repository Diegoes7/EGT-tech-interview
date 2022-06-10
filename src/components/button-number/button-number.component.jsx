import { useDispatch } from "react-redux";
import { toggleBtn } from "../../features/button/buttonSlice";

import "./button-number.styles.css";

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
		<button
			className="button"
			id={id}
			disabled={disabled}
			onClick={handleButton}
		>
			{selected ? value : "X"}
		</button>
	);
};

export default ButtonNumber;
