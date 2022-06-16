import styled from "styled-components";

export const GameBoardContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	width: 800px;
	height: 400px;

	@media screen and (max-width: 850px) {
		height: 380px;
		width: 670px;
	}

	@media screen and (max-width: 730px) {
		height: 340px;
		width: 570px;
	}
	@media screen and (max-width: 650px) {
		height: 280px;
		width: 510px;
	}
	@media screen and (max-width: 555px) {
		height: 240px;
		width: 450px;
	}
	@media screen and (max-width: 510px) {
		height: 210px;
		width: 400px;
	}
	@media screen and (max-width: 450px) {
		height: 180px;
		width: 320px;
	}
`;
