import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'
import { customBorderRadius, mainRedColor } from '../../App.styles'

export const BetFieldContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex: 1 1 auto;
	text-align: center;
	flex-direction: column;
	color: rgb(1, 17, 7);
	font-weight: 700;
	justify-content: center;
	align-content: center;
	background-color: #fff;

	@media screen and (max-width: 1200px) {
		padding: 0.5rem;
		font-size: 0.9rem;
	}
`

export const FinalBet = styled.span`
	margin-bottom: 3px;
	padding: 0 0.75rem;
	background-color: ${mainRedColor};
	margin: 0.5rem 1.5rem;
	padding: 0.3rem;
	color: white;
	${customBorderRadius}
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	width: 17rem;
	line-height: 1rem;
	margin-bottom: 10px;

	span {
		display: flex;
		align-self: center;
		padding-left: 0.5rem;
	}

	@media screen and (max-width: 1200px) {
		width: 14rem;
	}
`

export const MainBetContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	border-radius: 0.75rem;
`

export const BetContainer = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: white;
	left: 1%;
	top: 14%;
	overflow: auto;
	width: 19rem;
	border-radius: 0.75rem;
	text-align: center;
	font-weight: 700;
	background-color: #fff;
	border-radius: 0.75rem;

	@media screen and (max-width: 800px) {
		top: 13.5%;
		padding-bottom: 0.5rem;
	}

	@media screen and (max-width: 720px) {
		top: 12.7%;
		left: 3%;
		width: 15rem;
	}

	@media screen and (max-width: 600px) {
		top: 10.2%;
	}
`

export const BetPopupContainer = styled.div`
	border-radius: 0.8rem;
	${customBoxShadow}

	@media screen and (max-width: 600px) {
		font-size: 1rem;
		padding-bottom: 0.3rem;
		box-shadow: none;
	}
`
