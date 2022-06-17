import styled from "styled-components";

export const TheButton = styled.button`
	height: 16%;
	width: 10%;
	background-color: rgb(29, 8, 74);
	font-weight: 700;
	font-size: 20px;
	color: rgb(26, 198, 161);

	&:hover {
		background-color: rgb(250, 250, 250);
	}

	&:disabled {
		background-color: rgb(175, 207, 11);
		color: rgb(175, 207, 11);
	}

	@media screen and (max-width: 1260px) {
		height: 19%;
		width: 10%;
	}

	@media screen and (max-width: 730px) {
		font-size: 15px;
	}

	@media screen and (max-width: 555px) {
		font-size: 13px;
	}
`;
