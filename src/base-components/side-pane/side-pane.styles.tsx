import styled from 'styled-components'
import { customBoxShadow } from '../../features/game-board/game-board.styles'
import { customBorderRadius, mainYellowColor } from '../../App.styles'

export const SidePaneContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #c3ccc7;
	overflow-x: hidden;
	transition: all ease-in-out 0.5s;
	height: 35rem;
	margin-bottom: 0px;
	width: 40%;
	text-align: center;
	padding: 0.7rem 1rem;
	margin-top: 1rem;
	${customBoxShadow}
	${customBorderRadius}
	
	h1 {
		font-size: 0.9rem;
	}

	h2 {
		font-size: 1.1rem;
		border-bottom: 0.1rem solid black;
		border-top: 0.1rem solid black;
		margin-top: 0.2rem;
	}

	&:hover {
		background-color: #f1f1f1;
		transform: scale(1.025) translate(0, -4px);
	}
`

export const DragonContainer = styled.div`
	display: flex;
	padding: 0.3rem;
`

export const RewardDragonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	margin: 1rem 0;
	padding: 1rem 0;
	font-weight: bold;

	@media screen and (max-width: 480px) {
		font-size: .8rem;
	}
`

export const RewardSpan = styled.h1`
	font-size: 0.7rem;
	background-color: #151518;
	color: ${mainYellowColor};
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1.8rem;
	${customBorderRadius}
`
