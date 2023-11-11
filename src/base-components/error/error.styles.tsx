import styled from 'styled-components'
import { customBorderRadius } from '../../App.styles'

export const ErrorContainer = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	display: block;
	position: fixed;
	z-index: 1;
	background-color: white;
	left: 40%;
	top: 30%;
	overflow: auto;
	width: 30%;
	gap: 0.4rem;
	margin-top: 0.4rem;
	padding: 0.5rem;
	background-color: #dab9d5;
	color: #0a090c;
	${customBorderRadius}
`

export const ChildrenContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: flex-start; */
`

export const CloseButtonContainer = styled.div`
	display: flex;
	align-self: flex-end;
`

export const ErrorMessageContainer = styled.h4`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.5rem 0.5rem 2rem 0.5rem;
  height: 50%;
  font-size: 1.2rem;
`
