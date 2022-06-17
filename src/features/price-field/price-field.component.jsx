import { useSelector } from 'react-redux';

import {PriceValue, PriceContainer} from "./price-field.styles";

const Price = () => {
   //get state properties and pass it the UI element
	const drawValue = useSelector(state => state.draw.draws)
	const betValue = useSelector(state => state.bet.bet)
	const arrayLength = useSelector(state => state.button.selectedNumbers)
	// console.log(drawValue, betValue, arrayLength.length);
	// do the needed calculations
	const finalPrice = Number(drawValue) * Number(betValue) * Number( arrayLength.length);
 
	// pass the value to be displayed, and format it 
	return (
		<PriceContainer>
			Цена: <PriceValue> {finalPrice.toFixed(2)} лв.</PriceValue>
		</PriceContainer>
	);
};

export default Price;
