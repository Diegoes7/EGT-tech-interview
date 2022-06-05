import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../features/button/buttonSlice";
import betSlice from "../features/betting/bettingSlice";
import drawSlice from "../features/draw/drawSlice";

export const store = configureStore({
	reducer: {
		button: buttonReducer,
		bet: betSlice,
		draw: drawSlice
	},
});
