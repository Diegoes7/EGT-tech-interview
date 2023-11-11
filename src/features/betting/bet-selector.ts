import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get slice of the state
const betReducer = (state: RootState) => state.bet

//! memoized the part of sliced state, update when changed
export const selectedBet = createSelector(
	[betReducer],
	(betSlice) => Math.round(betSlice.bet * 100) / 100
)

export const selectedBetShow = createSelector(
	[betReducer],
	(betSlice) => betSlice.showBet
)
