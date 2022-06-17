import { createSlice } from "@reduxjs/toolkit";

// assign board to inial state property
const initialState = {
	clockTime: 180,
	loadStuff: true,
};

export const clockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		// update state
		clockTick: (state) => {
			state.clockTime -= 1;
		},
		reset: (state) => {
			state.clockTime = 180;
		},
		loadComments: (state) => {
			state.loadStuff = true;
		},
		hideComments: (state) => {
			state.loadStuff = false;
		},
	},
});

// action creators
export const { clockTick, reset, loadComments, hideComments } =
	clockSlice.actions;

export default clockSlice.reducer;
