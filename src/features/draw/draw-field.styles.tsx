import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'
import { customBorderRadius, mainRedColor } from '../../App.styles'

export const DrawFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const DrawTitle = styled.span`
	display: flex;
	align-self: center;
	background-color: ${mainRedColor};
	margin: 0.5rem 1.5rem;
	padding: 0.3rem 1rem;
	color: white;
	${customBorderRadius}
`

export const DrawButtonsModifier = styled.button`
	font-weight: 900;
	border-radius: 7px;
	padding: 0 1.5px;
	margin-left: 10px;

	&:hover {
		background-color: rgb(16, 163, 160);
		color: azure;
	}
`

export const DrawContainer = styled.div`
	display: block;
	position: absolute;
	top: 0%;
	/* left: -45%; */
	z-index: 1;
	background-color: white;
	overflow: auto;
	width: 18rem;
	border-radius: 0.75rem;
	text-align: center;
	padding: 1rem 0 0 0;
	font-weight: 700;
	background-color: #fff;
	border-radius: 0.75rem;

	@media screen and (max-width: 800px) {
		padding-bottom: 0.5rem;
	}

	@media screen and (max-width: 720px) {
		width: 15rem;
		font-size: 1rem;
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 0.3rem;
`

export const MainDrawContainer = styled.div`
	position: relative;
	border-radius: 0.75rem;
	${customBoxShadow}

	@media screen and (max-width:600px) {
		box-shadow: none;
		font-size: 1rem;
	}
`
