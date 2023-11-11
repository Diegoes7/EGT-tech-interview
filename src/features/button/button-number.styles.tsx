import styled, { css } from 'styled-components'
import { customBorderRadius } from '../../App.styles'

const selectedStyles = css`
	background-color: rgba(69, 200, 158, 0.938);
	transition: all ease-in-out 0.5s;
	border: 0.2rem solid white;
	color: #e5f0f3;
`

type SelectedButton = {
	selectedButton: boolean
}

export const BoardButton = styled.button<SelectedButton>`
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
	height: 12.5%;
	width: 10%;
	background-color: rgb(248, 58, 12);
	font-weight: 700;
	font-size: 1.3rem;
	${customBorderRadius}
	border: 0.00001em solid black;
	color: #3d1919;
	cursor: pointer;

	${({ selectedButton }) => selectedButton && selectedStyles}

	&:hover {
		opacity: 0.3;
		color: #e9e6e6;
	}

	&:disabled {
		background-color: rgb(11, 119, 207);
	}

	@media screen and (max-width: 1260px) {
		width: 10%;
	}

	@media screen and (max-width: 650px) {
		font-size: 0.9rem;
		height: 3rem;
	}
`
