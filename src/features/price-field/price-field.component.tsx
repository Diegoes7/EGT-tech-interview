import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PriceValue, PriceContainer } from './price-field.styles'
import { selectedDraws } from '../draw/draw-selector'
import { selectedBet } from '../betting/bet-selector'
import {
	selectChooseButtons,
	selectedSpecialTokens,
} from '../button/button-selector'
import { StyledFaMoneyBillTransferIcon } from '../../base-components/icon-components/icon-styles'
import { selectedPrice } from './price-selector'
import { setPrice } from './priceSlice'
import { Currency } from '../betting/bet.styles'
import { HeaderCurrentNumber } from '../../base-components/header/header.styles'

const Price = () => {
	const dispatch = useDispatch()
	//! get state slices and pass it the UI element
	const drawValue = useSelector(selectedDraws)
	const betValue = useSelector(selectedBet)
	const arrayLength = useSelector(selectChooseButtons)
	const currentPrice = useSelector(selectedPrice)
	const specialTokens = useSelector(selectedSpecialTokens)

	//! do calculations
	const calculatePrice = React.useCallback(() => {
		const price = drawValue * betValue * arrayLength.length
		dispatch(setPrice(price))
	}, [drawValue, betValue, arrayLength.length, dispatch])

	React.useEffect(() => {
		calculatePrice()
	}, [calculatePrice])

	let specialReward: number = 0
	if (specialTokens.length === 3) {
		specialReward = 71717
	} else {
		specialReward = currentPrice
	}

	//$ pass the value to be displayed, and format it
	return (
		<PriceContainer>
			<StyledFaMoneyBillTransferIcon />
			Печалба:{' '}
			<PriceValue>
				{' '}
				<HeaderCurrentNumber>
					{specialReward}
				</HeaderCurrentNumber>{' '}
				<Currency> лв.</Currency>
			</PriceValue>
		</PriceContainer>
	)
}

export default Price
