import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DrawProps = {
	draws: number
	drawShow: boolean
}

const drawState = {
	draws: 1,
	drawShow: false,
}

//$ actions triggered from UI, which change the state
export const drawSlice = createSlice({
	name: 'draws',
	initialState: drawState,
	reducers: {
		increment: (state) => {
			if (!isNaN(state.draws) && state.draws >= 0) {
				state.draws += 1
			}
		},
		decrement: (state) => {
			if (!isNaN(state.draws) && state.draws >= 0) {
				state.draws -= 1
			}
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.draws = action.payload
		},
		showDrawDetails(state, { payload }: PayloadAction<boolean>) {
			state.drawShow = payload
		},
	},
})

// action creators
export const { increment, decrement, showDrawDetails, incrementByAmount } =
	drawSlice.actions

export const drawReducer = drawSlice.reducer
