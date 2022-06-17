import styled from "styled-components";

export const DrawFieldContainer = styled.div`
	margin: 10px 0;
	padding: 10px 25px;
	font-weight: 700;
	background-color: #fff;
	border-radius: 15px;
`;
export const DrawTitle = styled.span`
	margin: 7px;
	padding: 1.5rem;
	@media screen and (max-width: 905px) {
		padding: 0;
	}
`;

export const DrawButtonsModifier = styled.button`
	font-weight: 900;
	border-radius: 7px;
	padding: 0 1.5px;
	margin-left: 10px;

	&:hover {
		background-color: rgb(16, 163, 160);
		color: azure;
	}
`;
