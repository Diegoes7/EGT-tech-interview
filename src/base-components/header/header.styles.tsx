import styled from 'styled-components'

export const HeaderContainer = styled.header`
	height: 3.375rem;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.2rem;
	gap: 0.2rem;

	@media screen and (max-width: 800px) {
		height: 3rem;
		padding: 5px;
	}

	@media screen and (max-width: 720px) {
		font-size: 0.7rem;
		padding: 0px;
	}
	@media screen and (max-width: 600px) {
		height: 5rem;
		padding: 0.2rem;
	}
`

export const InnerWrapper = styled.div`
	display: flex;
	gap: 0.2rem;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		margin: 0.2rem;
		padding: 0.2rem;
	}
`

export const HeaderCurrentNumber = styled.span`
	margin-left: 0.2rem;
	font-size: 1rem;

	@media screen and (max-width: 720px) {
		font-size: 0.8rem;
	}
`
