import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bet: Math.round(1.0 * 100) / 100,
};

// no a lot to comment, code is simple and easy to understand
// math aperation which update UI, and correspond to actions
export const betSlice = createSlice({
	name: "bet",
	initialState,
	reducers: {
		increment: (state) => {
			state.bet += 0.2;
		},
		decrement: (state) => {
			state.bet -= 0.2;
		},
		reset: (state) => {
			state.bet = 1.0;
		},
		incrementByAmount: (state, action) => {
			state.bet = Number(state.bet) + Number(action.payload);
		},
	},
});

// action creators
export const { increment, decrement, reset, incrementByAmount } =
	betSlice.actions;

export default betSlice.reducer;
