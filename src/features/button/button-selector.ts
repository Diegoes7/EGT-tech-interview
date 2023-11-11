import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get slice of the state
const buttonReducer = (state: RootState) => state.button

//! memoized the part of sliced state, update when changed
export const selectChooseButtons = createSelector(
	[buttonReducer],
	(buttonSlice) => buttonSlice.selectedNumbers
)

export const selectedBoard = createSelector(
	[buttonReducer],
	(buttonSlice) => buttonSlice.board
)

export const showSelectedNumbersSlice = createSelector(
	[buttonReducer],
	(buttonSlice) => buttonSlice.showSelectedNumbers
)

export const selectedResult = createSelector(
	[buttonReducer],
	(buttonSlice) => buttonSlice.result
)

export const selectedSpecialTokens = createSelector(
	[buttonReducer],
	(buttonSlice) => buttonSlice.specialTokens
)