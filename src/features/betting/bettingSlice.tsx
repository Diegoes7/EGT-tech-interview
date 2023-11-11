import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type BetProps = {
	bet: number
	showBet: boolean
}

const betState: BetProps = {
	bet: 1,
	showBet: false,
}

//! actions which update UI,
export const betSlice = createSlice({
	name: 'bet',
	initialState: betState,
	reducers: {
		increment: (state) => {
			if (!isNaN(state.bet) && state.bet > 0.2) {
				state.bet += 0.2
			}
		},
		decrement: (state) => {
			if (!isNaN(state.bet) && state.bet > 0.2) {
				state.bet -= 0.2
			}
		},
		reset: (state) => {
			state.bet = 1.0
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.bet = action.payload
		},
		showBetDetails(state, { payload }: PayloadAction<boolean>) {
			state.showBet = payload
		},
	},
})

//i action creators
export const {
	increment,
	decrement,
	showBetDetails,
	reset,
	incrementByAmount,
} = betSlice.actions

export const betReducer = betSlice.reducer
