import styled, { css } from 'styled-components'
import { customBoxShadow } from './features/game-board/game-board.styles'

export const mainRedColor = 'rgb(195, 50, 50)'
export const secondRedColor = 'rgba(239, 9, 24, 0.5)'
export const mainYellowColor = 'rgb(255, 210, 40)'

export const customBorderRadius = css`
	border-radius: 0.75rem;
`

export const AppContainer = styled.div`
	display: flex;
	margin: 0.2rem .6rem;
	gap: 3%;
	align-items: flex-start;
	justify-content: center;

	@media screen and (max-width: 1260px) {
		flex-direction: column;
		align-items: center;
	}
`

export const TitleContainer = styled.h2`
	display: flex;
	flex: 1 1 auto;
	font-size: 1.1rem;
	/* line-height: 0.5rem; */
	justify-content: center;
	padding: 0 3.2rem 0 2.5rem;
	align-items: center;
	background-color: ${secondRedColor};
	color: white;
	height: 1.7rem;
	${customBorderRadius}
	${customBoxShadow}

	@media screen and (max-width: 600px) {
		font-size: 0.8rem;
		padding: 0 2.2rem 0 1.5rem;
		height: 1.4rem;
	}
`

export const InnerContainer = styled.div`
	display: flex ;
	gap: 1rem;	
`

export const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const WrapperTimeComment = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1260px) {
		display: flex;
		align-items: center;
	}
	@media screen and (max-width: 450px) {
		flex-direction: column;
		align-items: center;
	}
`

