import styled from "styled-components";

export const SelectedButtons = styled.div`
	display: block;
	text-align: center;
	margin: 10px 30px;
	padding: 10px 20px;
	height: 12rem;
	width: 200px;
	font-weight: 600;
	background-color: rgb(151, 229, 214);
	border-radius: 10px;

	@media screen and (max-width: 870px) {
		padding: 10px ;
	}
`;

export const SelectedNumbersContainer = styled.div`
	margin: 10px;
	display: flex;
	flex-wrap: wrap;
`;
export const SelectedNumbersRow = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2px;
	color: white;
	background-color: black;
	padding: 0.3rem 0.3rem;
	border-radius: 20px;
`;

export const ConfirmSelectedNumbers = styled.button`
	color: rgb(27, 3, 103);
	background-color: #fff;
	border: none;
	font-size: 14px;
	font-weight: 600;
	padding: 0.3rem;
	border-radius: 10px;

	&:hover {
		color: #fff;
		background-color: rgb(27, 3, 103);
		transform: all 0.7s ease-in-out;
	}
`;
