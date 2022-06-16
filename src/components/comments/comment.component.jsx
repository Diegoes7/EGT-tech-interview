import { LineComment } from "./comments.styles.js";

const Comment = ({ id, marked, name }) => {
	return (
		<>
			<LineComment key={id} id={id} marked={marked}>
				{id}: {name}
				{marked ? "    🚀" : ""}
			</LineComment>
		</>
	);
};

export default Comment;
