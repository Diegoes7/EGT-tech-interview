import styled, { css } from 'styled-components'
import { SpinnerContainer } from '../spinner/spinner.styles'
import { customBorderRadius, mainRedColor } from '../../App.styles'
import { customBoxShadow } from '../../features/game-board/game-board.styles'

const mainHover = css`
	color: ${mainRedColor};
	background-color: white;
	border: 0.15rem solid ${mainRedColor};
	transform: all 1s ease-in-out;
`

const customDisabled = css`
	color: #b0b0cb;
	background-color: #120202;
	border: 0.15rem solid #120202;
	cursor: not-allowed;
`

export const BaseButton = styled.button`
	min-width: 3rem;
	${customBorderRadius}
	width: auto;
	letter-spacing: 0.5px;
	line-height: 1rem;
	font-size: 0.7rem;
	background-color: ${mainRedColor};
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
	border: 0.15rem solid ${mainRedColor};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	${customBoxShadow}

	&:hover {
		${mainHover}
	}

	&:disabled {
		${customDisabled}
	}

	@media screen and (max-width: 1200px) {
		font-size: 0.7rem;
		font-weight: none;
	}

	@media screen and (max-width: 720px) {
		font-size: 0.7rem;
		padding: 0.3rem;
	}

	@media screen and (max-width: 600px) {
		font-size: 0.6rem;
		padding: 0.3rem;
	}
`
export const ModifyButton = styled(BaseButton)`
	min-width: 1.7rem;
	height: 2rem;
	padding: 0.1rem;
	margin: 0.1rem;
	font-size: 1.05rem;

	&:hover {
		${mainHover}
	}

	&:disabled {
		color: #b0b0cb;
		background-color: #4285f4;
		border: none;
	}
`

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 30px;
	height: 30px;
`
export const ButtonIcon = styled.button`
	background-color: white;
	cursor: pointer;

	&:disabled {
		${customDisabled}
		border-radius: 2rem;
		height: 2.1rem;
	}

	@media screen and (max-width: 1200px) {
		font-size: 0.5rem;
	}
`
