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
	margin-bottom: 0.5rem;
	overflow: hidden;

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
	margin-bottom: 0.75rem;

	span {
		display: flex;
		align-self: center;
		padding-left: 0.5rem;
	}
	@media screen and (max-width: 720px) {
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
// element which will be positioned relative to ancestor
export const BetContainer = styled.div`
	display: block;
	position: absolute;
	top: 0%;
	/* left: -45%; */
	z-index: 1;
	background-color: white;
	overflow: auto;
	width: 19rem;
	border-radius: 0.75rem;
	text-align: center;
	font-weight: 700;
	background-color: #fff;
	border-radius: 0.75rem;

	@media screen and (max-width: 800px) {
		padding-bottom: 0.5rem;
	}

	@media screen and (max-width: 720px) {
		width: 15rem;
	}
`

//positioning context for its child elements
export const BetPopupContainer = styled.div`
	position: relative;
	border-radius: 0.8rem;
	${customBoxShadow}

	@media screen and (max-width: 600px) {
		font-size: 1rem;
		padding-bottom: 0.3rem;
		box-shadow: none;
	}
`

export const Currency = styled.span`
	margin-left: 0.2rem;
	font-size: 0.7rem;

	@media screen and (max-width: 720px) {
		font-size: 0.5rem;
	}
`
