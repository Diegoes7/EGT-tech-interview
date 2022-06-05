import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	draws: 1,
};


// just mathematical functions
export const drawSlice = createSlice({
	name: "draws",
	initialState,
	reducers: {
		increment: (state) => {
			state.draws += 1;
		},
		decrement: (state) => {
			state.draws -= 1;
		},
		incrementByAmount: (state, action) => {
			state.draws += action.payload;
		},
	},
});


// action creators
export const { increment, decrement, incrementByAmount } = drawSlice.actions;

export default drawSlice.reducer;
