import React from 'react'
import { HeaderContainer, InnerWrapper } from './header.styles'
import Price from '../../features/price-field/price-field.component'
import MainBet from '../../features/betting/main-bet.component'
import MainDraw from '../../features/draw/main-draw.component'
import MainSelectedNumbers from '../../features/selected-numbers/main-selected-numbers'

const Header = () => (
	<HeaderContainer>
		<InnerWrapper>
			<MainBet />
			<MainDraw />
		</InnerWrapper>
		<InnerWrapper>
			<MainSelectedNumbers />
			<Price />
		</InnerWrapper>
	</HeaderContainer>
)

export default Header
