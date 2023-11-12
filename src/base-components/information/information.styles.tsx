import styled from 'styled-components'
import { customBorderRadius } from '../../App.styles'

export const InformationContainer = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: white;
	left: 40%;
	top: 30%;
	overflow: auto;
	width: 40%;
	gap: 0.4rem;
	margin-top: 0.4rem;
	padding: 0.5rem;
	background-color: #dab9d5;
	color: #0a090c;
	${customBorderRadius}

	@media screen and (max-width: 750px) {
		width: 50%;
	}
	@media screen and (max-width: 550px) {
		width: 60%;
		left: 20%;
	}
`

export const ChildrenContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const CloseButtonContainer = styled.div`
	display: flex;
	align-self: flex-end;
`

export const InfoMessageContainer = styled.h4`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.5rem 0.5rem 2rem 0.5rem;
	height: 50%;
	font-size: 1rem;
`
