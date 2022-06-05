import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bet: 1.00,
};

// no a lot to comment, code is simple and easy to understand
// math aperation which update UI, and correspond to actions 
export const betSlice = createSlice({
	name: "bet",
	initialState,
	reducers: {
		increment: (state) => {
			state.bet += 0.20;
		},
		decrement: (state) => {
			state.bet -= 0.20;
		},
		reset: (state) => {
			state.bet = 1.00;
		},
		incrementByAmount: (state, action) => {
			state.bet += action.payload;
		},
	},
});


// action creators
export const { increment, decrement, reset, incrementByAmount } = betSlice.actions;

export default betSlice.reducer;
