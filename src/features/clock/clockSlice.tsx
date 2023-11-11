//@ts-check
import { createSlice } from '@reduxjs/toolkit'

type ClockProps = {
	clockTime: number,
	loadStuff: boolean
}

//! assign board to initial state property
const clockState: ClockProps = {
	clockTime: 180,
	loadStuff: true,
}

export const clockSlice = createSlice({
	name: 'clock',
	initialState: clockState,
	reducers: {
		//* update state, decrease seconds
		clockTick: (state) => {
			state.clockTime -= 1
		},
		//* clock start again
		reset: (state) => {
			state.clockTime = 180
		},
		//* show comments
		loadComments: (state) => {
			state.loadStuff = true
		},
		//* comments a invisible till met certain conditions
		hideComments: (state) => {
			state.loadStuff = false
		},
	},
})

// action creators
export const { clockTick, reset, loadComments, hideComments } =
	clockSlice.actions

export const clockReducer = clockSlice.reducer
