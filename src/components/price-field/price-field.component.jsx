import { useSelector } from 'react-redux';

import "./price-field.styles.css";

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
		<div className="price-container">
			Цена: <span className='price'> {finalPrice.toFixed(2)} лв.</span>
		</div>
	);
};

export default Price;
