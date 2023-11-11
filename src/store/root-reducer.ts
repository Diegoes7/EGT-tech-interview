import { combineReducers } from '@reduxjs/toolkit'
import { buttonReducer } from '../features/button/buttonSlice'
import { betReducer } from '../features/betting/bettingSlice'
import { drawReducer } from '../features/draw/drawSlice'
import { apiSlice } from '../features/apiSlice/commentsSlice'
import { clockReducer } from '../features/clock/clockSlice'
import { priceReducer } from '../features/price-field/priceSlice'

//! root_reducer - combination of all reducers
export const rootReducer = combineReducers({
	button: buttonReducer,
	bet: betReducer,
	draw: drawReducer,
	clock: clockReducer,
	price: priceReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
})
