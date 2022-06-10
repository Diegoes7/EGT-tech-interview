import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../features/button/buttonSlice";
import betSlice from "../features/betting/bettingSlice";
import drawSlice from "../features/draw/drawSlice";
import { apiSlice } from "../features/apiSlice/commentsSlice.js";
import clockSlice from "../features/clock/clockSlice";

export const store = configureStore({
	reducer: {
		button: buttonReducer,
		bet: betSlice,
		draw: drawSlice,
		clock: clockSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
