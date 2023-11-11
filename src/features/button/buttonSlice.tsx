import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Button = {
	id: string
	value: number
	selected: boolean
	disabled: boolean
}

export type ButtonState = {
	board: Button[]
	selectedNumbers: Button[]
	showSelectedNumbers: boolean
	result: number
	specialTokens: number[]
}

//! generate board items, which info will be filled in the UI component
//! this is starting point of the app
const gameBoard: Button[] = new Array(80).fill(0).map((_, inx) => ({
	id: (++inx).toString(),
	value: inx++,
	selected: false,
	disabled: false,
}))

export const initialState: ButtonState = {
	board: gameBoard,
	selectedNumbers: [],
	showSelectedNumbers: false,
	result: 0,
	specialTokens: [],
}

export const buttonSlice = createSlice({
	name: 'buttonsGenerator',
	initialState,
	reducers: {
		//$ this function to through buttons and when some button is pressed change the state, include guard clause
		toggleBtn: (state, action: PayloadAction<string>) => {
			const pressBtn = state.board.find((btn) => {
				return btn.id === action.payload
			})
			if (!pressBtn) return
			pressBtn.selected = !pressBtn.selected
		},
		//! go to the board and get only selected by the user numbers
		addNumber: (state) => {
			const selectedArr = state.board.filter((cur) => cur.selected === true)
			state.selectedNumbers = selectedArr
		},
		disabledBtns: (state) => {
			//! selected buttons must remain active
			state.board
				.filter((cur) => cur.selected === false)
				.map((cur) => (cur.disabled = true))
			//! other 68 buttons must be disabled
			//! so 68 must switch state, to disabled true
		},
		enableBtns: (state) => {
			state.board.map((cur) => (cur.disabled = false))
		},
		showSelectedNumbers(state, { payload }: PayloadAction<boolean>) {
			state.showSelectedNumbers = payload
		},
		getResult(state, { payload }: PayloadAction<number>) {
			state.result += payload
		},
		resetResult(state) {
			state.result = 0
		},
		addSpecialToken(state, { payload }) {
			state.specialTokens = payload
			if (state.specialTokens.length > 3) {
				return
			}
		},
	},
})

//$ action creators
export const {
	toggleBtn,
	addNumber,
	showSelectedNumbers,
	disabledBtns,
	enableBtns,
	getResult,
	resetResult,
	addSpecialToken,
} = buttonSlice.actions

//$ Export the reducer
export const buttonReducer = buttonSlice.reducer
