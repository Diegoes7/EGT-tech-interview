import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice/commentsSlice'
import { rootReducer } from './root-reducer'

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})
