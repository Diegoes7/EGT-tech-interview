import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'
import {
	customBorderRadius,
	mainRedColor,
	mainYellowColor,
} from '../../App.styles'

export const SelectedButtons = styled.div`
	display: flex;
	padding: 10px 20px;
	font-weight: 600;
	border-radius: 10px;
	justify-content: center;
	flex-direction: column;

	@media screen and (max-width: 870px) {
		padding: 10px;
	}
`

export const SelectedNumbersContainer = styled.div`
	margin: 0 0.7rem;
	display: flex;
	flex-wrap: wrap;
`
export const SelectedNumbersRow = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2px;
	color: white;
	background-color: black;
	padding: 0.3rem 0.3rem;
	border-radius: 20px;
	width: 1.8rem;
	font-size: 1rem;
`

export const ConfirmSelectedNumbers = styled.button`
	color: rgb(27, 3, 103);
	background-color: #fff;
	border: none;
	font-size: 14px;
	font-weight: 600;
	padding: 0.3rem;
	border-radius: 10px;

	&:hover {
		color: #fff;
		background-color: rgb(27, 3, 103);
		transform: all 0.7s ease-in-out;
	}
`

export const MainSelectedButtonContainer = styled.button`
	padding: 1rem;
	display: flex;
	text-align: center;
	color: rgb(4, 61, 24);
	font-weight: 700;
	justify-content: center;
	align-content: center;
	background-color: #fff;
	border-radius: 0.75rem;
`

export const SelectedNumberContainer = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: white;
	left: 33%;
	top: 14%;
	overflow: auto;
	width: 18rem;
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
		width: 15rem;
	}

	@media screen and (max-width: 600px) {
		top: 10%;
	}
`

export const MainSelectedNumbersContainer = styled.div`
	border-radius: 0.75rem;
	${customBoxShadow}

	@media screen and (max-width: 600px) {
		padding-bottom: 0.3rem;
		box-shadow: none;
		font-size: 0.6rem;
	}
`

export const CurrentResultContainer = styled.div`
	display: flex;
	padding: 0.5rem 0;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	background-color: #151518;
	color: ${mainYellowColor};
	margin: 0.4rem;
	padding: 0.4rem;
	${customBorderRadius}
`

export const TitleSelectedNumbersContainer = styled.div`
	background-color: ${mainRedColor};
	margin: 0.5rem 0.2rem;
	padding: 0.4rem 0.4rem;
	color: white;
	font-size: 0.9rem;
	${customBorderRadius}
`
