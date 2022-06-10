import { createSlice } from "@reduxjs/toolkit";

// generate board items, which will be info will be filled in the UI component
//* this is starting point of the app
const gameBoard = new Array(80).fill().map(function (_, inx) {
	return {
		id: (++inx).toString(),
		value: inx++,
		selected: true,
		disabled: false,
	};
});

// assign board to inial state property
// second properties is dynamic and depends on user actions
const initialState = {
	board: gameBoard,
	selectedNumbers: [],
};

export const buttonSlice = createSlice({
	name: "buttonGenerator",
	initialState,
	reducers: {
		// this function to througth pres buttons and when some button is pressed change the state, include guard clause, just for fun
		toggleBtn: (state, action) => {
			const pressBtn = state.board.find((btn) => {
				// console.log(action);
				// console.log(btn.id);
				return btn.id === action.payload;
			});
			if (!pressBtn) return;
			// console.log(pressBtn.selected);
			pressBtn.selected = !pressBtn.selected;
			// console.log(pressBtn.selected);
		},
		// go to the board and get only selected by the user numbers
		addNumber: (state) => {
			const arr = state.board.filter((cur) => cur.selected === false);
			state.selectedNumbers = arr;
		},
		disabledBtns: (state) => {
			// selected buttons must remain active
			state.board
				.filter((cur) => cur.selected === true)
				.map((cur) => (cur.disabled = true));
			// other 68 buttons must be disabled
			// so 68 must switch state, to disabled true
		},
		enableBtns: (state) => {
			state.board.map((cur) => (cur.disabled = false));
		},
	},
});

// action creators
export const { toggleBtn, addNumber, disabledBtns, enableBtns } =
	buttonSlice.actions;

export default buttonSlice.reducer;
