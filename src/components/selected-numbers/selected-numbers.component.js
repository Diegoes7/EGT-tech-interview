import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber } from "../../features/button/buttonSlice";
import "./selected-numbers.styles.css";

const SelectedNumbers = () => {
	// get slices of the state 
	const currentSelectedNumbers = useSelector(
		(state) => state.button.selectedNumbers
	);
	const selectedNumbers = useSelector((state) => state.button.board);
	const dispatch = useDispatch();
	// console.log(selectedNumbers);

	// update UI every time a number is added
	useEffect(() => {
		dispatch(addNumber());
	}, [selectedNumbers, dispatch]);
	// console.log(currentSelectedNumbers);

	// iterate througth [] nand show the selected numbers
	//* just to send or keep numbers somewhere, not part of assignment
	return (
		<div className="selected-buttons">
			My Lucky Numbers: 
			<br />
            <div className="selectedNumber-container">
			{currentSelectedNumbers.map((sln) => {
				return <span className="selectedNumber" key={sln.id}>{sln.value}</span>;
			})}
            </div>
            <button className="confirm">Confirm</button>
		</div>
	);
};

export default SelectedNumbers;
