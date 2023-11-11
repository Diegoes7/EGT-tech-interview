import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PriceValue, PriceContainer } from './price-field.styles'
import { selectedDraws } from '../draw/draw-selector'
import { selectedBet } from '../betting/bet-selector'
import { selectChooseButtons } from '../button/button-selector'
import { StyledFaMoneyBillTransferIcon } from '../../base-components/icon-components/icon-styles'
import { selectedPrice } from './price-selector'
import { setPrice } from './priceSlice'

const Price = () => {
	const dispatch = useDispatch()
	//! get state slices and pass it the UI element
	const drawValue = useSelector(selectedDraws)
	const betValue = useSelector(selectedBet)
	const arrayLength = useSelector(selectChooseButtons)
	const currentPrice = useSelector(selectedPrice)

	//! do calculations
	const calculatePrice = React.useCallback(() => {
		const price = drawValue * betValue * arrayLength.length
		dispatch(setPrice(price))
	}, [drawValue, betValue, arrayLength.length, dispatch])

	React.useEffect(() => {
		calculatePrice()
	}, [calculatePrice])

	//$ pass the value to be displayed, and format it
	return (
		<PriceContainer>
			<StyledFaMoneyBillTransferIcon />
			Печалба: <PriceValue> {currentPrice} лв.</PriceValue>
		</PriceContainer>
	)
}

export default Price
