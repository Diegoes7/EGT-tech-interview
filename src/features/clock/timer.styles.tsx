import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'
import { customBorderRadius, mainRedColor } from '../../App.styles'

export const TimerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.8rem;
	width: 60%;
	padding: 0.6rem;
	background-color: ${mainRedColor};
	color: white;
	font-weight: 700;
	${customBoxShadow}
	${customBorderRadius}

	@media screen and (max-width: 1260px) {
		margin-left: 1rem;
		width: auto;
	}
	@media screen and (max-width: 720px) {
		font-size: 0.8rem;
		padding: 0.3rem;
	}
`

export const OuterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
	align-items: baseline;
	margin: 0 1.85rem;

	@media screen and (max-width: 1260px) {
		width: auto;
	}
`

export const TimerSpan = styled.span`
	margin-right: 0.3rem;
`
