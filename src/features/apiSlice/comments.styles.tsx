import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'
import { customBorderRadius, mainRedColor, mainYellowColor, secondRedColor } from '../../App.styles'

export const CommentsContainer = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	align-items: baseline;
	margin-top: 1rem;
	background-color: rgb(15, 22, 31);
	padding: 0.5rem;
	width: 70%;
	width: 18rem;
	border: 0.5rem solid ${mainRedColor};
	color: white;
	${customBoxShadow}
	${customBorderRadius}

	@media screen and (max-width: 610px) {
		width: 40%;
	}
`

export const Title = styled.h2`
	margin-bottom: 10px;
	border-bottom: 0.2rem solid black;

	@media screen and (max-width: 600px) {
		font-size: 1rem;
	}
`

export const LineComment = styled.p`
	&:nth-child(odd) {
		padding: 2px 4px;
		border-radius: 7px;
		margin-bottom: 3px;
		background: ${secondRedColor};
	}

	&:nth-child(even) {
		padding: 2px 4px;
		border-radius: 7px;
		margin-bottom: 3px;
		background: ${mainYellowColor};
		color: rgb(15, 22, 31);
	}

	@media screen and (max-width: 600px) {
		font-size: .9rem;
	}
`
