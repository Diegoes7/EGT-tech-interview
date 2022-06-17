import styled from "styled-components";

export const BetFieldContainer = styled.div`
	margin: 1rem 2rem;
	padding: 10px 25px;
	display: flex;
	flex-direction: column;
	color: rgb(4, 61, 24);
	font-weight: 700;
	justify-content: center;
	align-content: center;
	background-color: #fff;
	border-radius: 20px;
`;

export const FinalBet = styled.span`
	margin-bottom: 3px;
	padding: 0 10px;

	@media screen and (max-width: 905px) {
		padding: 0;
	}
`;

export const InputContainer = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: right;
	width: 100px;
	line-height: 26px;
	margin-bottom: 10px;

	span {
		padding-left: 0.5rem;
	}
`;

export const InputField = styled.input`
	height: 30px;
	width: 60px;
	margin-left: 10px;
	border-radius: 10px;
	text-align: center;
	font-weight: 700;
	font-size: 17px;
	border: 2px rgb(16, 163, 160) solid;
`;

export const BetModifyingButtons = styled.button`
	font-weight: 900;
	border-radius: 7px;
	padding: 0 1.5px;

	&:hover {
		background-color: rgb(16, 163, 160);
		color: azure;
	}
`;

export const ActionButtons = styled.button`
	background-color: rgb(16, 163, 160);
	margin-top: 5px;
	border-radius: 13px;
	font-weight: bold;
	padding: 7px;
	font-size: 13px;
	color: azure;
	border: none;

	&:hover {
		background-color: azure;
		color: rgb(16, 163, 160);
		border: solid 3px rgb(16, 163, 160);
		padding: 4px;
		transform: all 0.7s ease-in-out;
	}
`;
