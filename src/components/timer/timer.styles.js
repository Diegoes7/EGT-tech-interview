import styled from "styled-components";

export const TimerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	width: 60%;
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 30px;
	color: rgb(10, 63, 160);
	font-weight: 700;

	@media screen and (max-width: 1260px) {
        width: 30% ;
		margin-left: 1rem;
	}
`;
