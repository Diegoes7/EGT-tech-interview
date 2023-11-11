import styled, { css } from 'styled-components'

export const customBoxShadow = css`
	box-shadow: rgba(249, 249, 249, 0.25) 0px 50px 100px -20px,
		rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
		rgba(239, 235, 236, 0.35) 0px -2px 6px 0px;
`

export const GameBoardContainer = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-wrap: wrap;
	justify-content: flex-start;
	width: 46rem;
	height: 35rem;
	border: 0.5rem solid rgb(45, 37, 19);
	border-radius: 0.75rem;
	background-color: rgb(45, 37, 19);

	${customBoxShadow};

	@media screen and (max-width: 770px) {
		width: 100%;
	}
	@media screen and (max-width: 650px) {
		height: 100%;
	}
`
