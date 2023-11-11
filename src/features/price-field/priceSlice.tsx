import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type PriceProps = {
	price: number
}

const priceState = {
	price: 0,
}

export const priceSlice = createSlice({
	name: 'price',
	initialState: priceState,
	reducers: {
		setPrice: (state, action: PayloadAction<number>) => {
			state.price = action.payload
		},
	},
})

export const { setPrice } = priceSlice.actions

export const priceReducer = priceSlice.reducer
