import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clockTick,
	reset,
	loadComments
} from "../../features/clock/clockSlice";
import { useGetCommentsQuery } from "../../features/apiSlice/commentsSlice";

import "./timer.styles.css";

const Timer = () => {
	const dispatch = useDispatch();
	const currentTimer = useSelector((state) => state.clock.clockTime);
	const { isSuccess } = useGetCommentsQuery();

	const min = String(Math.trunc(currentTimer / 60)).padStart(2, 0);
	const sec = String(currentTimer % 60).padStart(2, 0);

	if (currentTimer <= 0 && isSuccess) {
		dispatch(loadComments());
		dispatch(reset());
	}

	useEffect(() => {
		const interval = setInterval(() => dispatch(clockTick()), 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="timer">
			Timer:{" "}
			<span>
				{min}:{sec}
			</span>
		</div>
	);
};

export default Timer;
