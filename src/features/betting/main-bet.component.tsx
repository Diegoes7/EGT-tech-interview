import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedBet, selectedBetShow } from './bet-selector'
import {
	BetContainer,
	BetPopupContainer,
	Currency,
} from './bet.styles'
import Button from '../../base-components/button/button.component'
import BetField from './bet-field.component'
import { showBetDetails } from './bettingSlice'
import { StyledGiSwapBagIcon } from '../../base-components/icon-components/icon-styles'
import { HeaderCurrentNumber } from '../../base-components/header/header.styles'

const MainBet = () => {
	const dispatch = useDispatch()
	const currentBet = useSelector(selectedBet)
	const isShow = useSelector(selectedBetShow)

	//! show and hide the modal, where can modify the bet
	const handleToggle = useCallback(() => {
		try {
			dispatch(showBetDetails(!isShow))
		} catch (error) {
			alert('Nothing for now.')
		}
	}, [dispatch, isShow])

	return (
		<BetPopupContainer>
			<Button onClick={handleToggle}>
				<StyledGiSwapBagIcon />
				Залог: <HeaderCurrentNumber>{currentBet.toFixed(2)}</HeaderCurrentNumber>
				<Currency>лв.</Currency>
			</Button>
			{isShow && (
				<BetContainer>
					<BetField handleToggle={handleToggle} />
				</BetContainer>
			)}
		</BetPopupContainer>
	)
}

export default MainBet
