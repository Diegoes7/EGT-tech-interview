import styled from 'styled-components'
import { mainRedColor } from '../../App.styles'

// const subColor = 'grey'
const mainInputColor = 'black'

export const InputLabel = styled.label`
	display: flex;
	transition: 300ms ease all;
`

export const Input = styled.input`
	display: flex;
	background: none;
	background-color: white;
	color: ${mainInputColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	width: 85%;
	border: none;
	margin: 1rem 0;
	text-align: center;
	border: 2px ${mainRedColor} solid;
	border-radius: 0.5rem;

	::placeholder {
		font-size: 12px;
	}

	&:focus {
		outline: none;
	}

	@media screen and (max-width: 1200px) {
		font-size: 16px;
		width: 70%;
	}

	@media screen and (max-width: 800px) {
		label {
			font-size: 2rem;
		}
	}
`

export const Group = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: center;
`
