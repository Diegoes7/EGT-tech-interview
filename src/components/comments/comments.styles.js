import styled from "styled-components";

export const CommentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	margin-top: 35px;
	background-color: #fff;
	padding: 10px;
	border-radius: 20px;
	width: 70%;
	height: 31rem;
	width: 18rem;

	@media screen and (max-width: 1260px) {
		width: 28rem;
	}

	@media screen and (max-width: 610px) {
		width: 18rem;
	}
	
	@media screen and (max-width: 450px) {
		height: 37rem;
	}
`;

export const Title = styled.h2`
	margin-bottom: 10px;
`;

export const LineComment = styled.p`
	&:nth-child(odd) {
		padding: 2px 4px;
		border-radius: 7px;
		margin-bottom: 3px;
		background: rgb(47, 255, 0);
	}

	&:nth-child(even) {
		padding: 2px 4px;
		border-radius: 7px;
		margin-bottom: 3px;
		background: rgba(20, 203, 245, 0.918);
	}
`;
