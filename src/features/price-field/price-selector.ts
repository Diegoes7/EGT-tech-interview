import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get slice of the state
const priceReducer = (state: RootState) => state.price

//! memoized the part of sliced state, update when changed
export const selectedPrice = createSelector(
	[priceReducer],
	(priceSlice) => Math.round(priceSlice.price * 100) / 100
)
