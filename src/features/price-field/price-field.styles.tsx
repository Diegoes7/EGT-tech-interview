import styled from 'styled-components'
import { customBoxShadow } from '../game-board/game-board.styles'

export const PriceContainer = styled.div`
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
	background-color: #ee9322;
	padding: 0.6rem;
	border-radius: 15px;
	color: aliceblue;
	margin-left: 5rem;
	font-size: 1rem;
	font-weight: bold;
	${customBoxShadow}

	@media screen and (max-width: 720px) {
		margin-left: 0.2rem;
		padding: 0.3rem;
		box-shadow: none;
		font-size: 0.9rem;
	}
`

export const PriceValue = styled.span`
	font-weight: 600;
	padding-left: 5px;
`
