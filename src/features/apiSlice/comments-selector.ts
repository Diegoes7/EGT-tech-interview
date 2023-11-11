import { createSelector } from 'reselect'
import { RootState } from '../../store/store'

//! get slice of the state
const commentsReducer = (state: RootState) => state.api

//! memoized the part of sliced state, update when changed
export const selectCurrentComments = createSelector(
	[commentsReducer],
	(api) => api.queries
)
