import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../../features/apiSlice/commentsSlice";

import "./comments.styles.css";

const Comments = () => {
	const {
		data: comments,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetCommentsQuery();

	const selectedNumberArray = useSelector(
		(state) => state.button.selectedNumbers
	);

	let content;

	if (isLoading) {
		content = "Loading...";
	} else if (isSuccess) {
		content = comments
			.filter((el) => el.id <= 10)
			.reverse()
			.map((comments) => (
				<p key={comments.id}>
					{comments.id}: {comments.name}{}
				</p>
			));
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}
	
	// get length of selected number [], => get on certain commnet add some style
	if (selectedNumberArray.length > 0) {
		console.log(selectedNumberArray.length);
		const markedComment = content
			.map((el) => el.key)
			.find((el) => el === selectedNumberArray.length);
		console.log(markedComment);
		// console.log(content[markedComment1].key);
	}

	return (
		<div className="comments">
			<h2 className="title">Comments: </h2>
			{content} 
		</div>
	);
};

export default Comments;
