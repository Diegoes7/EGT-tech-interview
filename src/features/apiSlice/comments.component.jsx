import { useGetCommentsQuery } from "./commentsSlice";
import { useSelector } from "react-redux";
import Comment from "./comment.component";

import { CommentsContainer, Title } from "./comments.styles";

const Comments = () => {
	const selectedNumberArray = useSelector(
		(state) => state.button.selectedNumbers
	);

	const {
		data: comments,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetCommentsQuery();

	let content;

	if (isLoading) {
		content = "Loading...";
	} else if (isSuccess) {
	// iterate througth the recieved data, check for true/false, so comment is marked or not
	//* return objects, and modify only currnetly selected comment
		content = comments
			.map((el) => {
				if (el.id === selectedNumberArray.length) {
					return { ...el, marked: true };
				}
				return { ...el, marked: false };
			})
			.map(({ id, marked, name }) => (
				<Comment key={id} id={id} marked={marked} name={name} />
			));
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	// console.log(comments);
	// console.log(content);

	return (
		<CommentsContainer>
			<Title>Comments: </Title>
			{content}
		</CommentsContainer>
	);
};

export default Comments;
