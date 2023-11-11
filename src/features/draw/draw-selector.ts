import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get specific slice of the state
const drawReducer = (state: RootState) => state.draw

//! memoized the part of sliced state, update when changed
export const selectedDraws = createSelector(
	[drawReducer],
	(drawSlice) => drawSlice.draws
)

export const selectedDrawShow = createSelector(
	[drawReducer],
	(drawSlice) => drawSlice.drawShow
)
