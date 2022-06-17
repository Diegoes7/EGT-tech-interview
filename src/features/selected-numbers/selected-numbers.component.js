import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber } from "../button/buttonSlice";
import {
	SelectedButtons,
	SelectedNumbersContainer,
	SelectedNumbersRow,
	ConfirmSelectedNumbers,
} from "./selected-numbers.styles.js";

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

	// iterate througth [] and show the selected numbers
	//* just to send or keep numbers somewhere, not part of assignment
	return (
		<SelectedButtons>
			My Lucky Numbers:
			<br />
			<SelectedNumbersContainer>
				{currentSelectedNumbers
					.map((sln) => {
						return (
							<SelectedNumbersRow key={sln.id}>{sln.value}</SelectedNumbersRow>
						);
					})
					.reverse()}
			</SelectedNumbersContainer>
			<ConfirmSelectedNumbers>Confirm</ConfirmSelectedNumbers>
		</SelectedButtons>
	);
};

export default SelectedNumbers;
