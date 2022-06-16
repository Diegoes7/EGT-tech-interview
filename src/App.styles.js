import styled from "styled-components";

export const AppContainer = styled.div`
	margin: 27px 20px 10px 30px;
	display: flex;
	align-content: center;
	justify-content: center;
	height: 100vh;

	@media screen and (max-width: 1260px) {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const GameFeaturesContainer = styled.div`
	margin: 15px 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media screen and (max-width: 1260px) {
		margin-top: 15rem;
		display: flex;
		flex-direction: row;
	}

	@media screen and (max-width: 750px) {
		margin-top: 13rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-content: center;
		justify-content: center;
	}
	@media screen and (max-width: 550px) {
		margin-top: 9rem;
	}
	@media screen and (max-width: 450px) {
		margin-top: 7rem;
	}
`;

export const WrapperTimeComment = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1260px) {
		display: flex;
		align-items: baseline;
		flex-direction: row;
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;
		align-items: center;
	}
`;
