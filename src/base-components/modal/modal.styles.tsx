import styled, { css } from 'styled-components'
import { customBorderRadius } from '../../App.styles'
import { customBoxShadow } from '../../features/game-board/game-board.styles'

export const Overlay = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: rgba(3, 3, 9, 0.9);
	left: 0;
	top: 0;
	overflow: auto;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const resizeContainerStyles = css`
	width: 60%;
	height: 50%;
`

type ResizeContainerProp = {
	resizeContainer: boolean
}

export const ModalView = styled.div<ResizeContainerProp>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 100%;
	padding: 0.5rem;
	border: 2px solid black;
	${customBorderRadius}
	background-color: #eae3e3;
	overflow: hidden;

	${({ resizeContainer }) => resizeContainer && resizeContainerStyles}

	@media screen and (max-width: 530px) {
		padding: 1rem 0.5rem;
		width: 80%;
	}
`

export const TextContainer = styled.div`
	margin: 1.5rem 1.5rem 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1.5rem;
	border-radius: 0.75rem;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

	h2 {
		font-size: 1rem;
		width: 97%;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
	}

	@media screen and (max-width: 560px) {
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 460px) {
		margin: 1rem 0.5rem;
		h2 {
			font-size: 0.8rem;
		}
	}
`

export const StyledImage = styled.img`
	width: 35rem;
	height: 18rem;
	border-radius: 8px;
	${customBoxShadow}
`
