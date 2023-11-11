import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get slice of the state
const clockReducer = (state: RootState) => state.clock

//! memoized the part of sliced state, update when changed
export const selectedClockTime = createSelector(
	[clockReducer],
	(clock) => clock.clockTime
)

export const selectedLoad = createSelector(
	[clockReducer],
	(clock) => clock.loadStuff
)