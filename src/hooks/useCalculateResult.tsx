import { useState, useEffect } from 'react'
import { Button } from '../features/button/buttonSlice'

//! custom hook to calculate the sum and decide if you win
//! for now only odd and even numbers
export const useCalculateResult = (currentSelectedNumbers: Button[]) => {
	const [state, setResult] = useState(0)

	useEffect(() => {
		if (currentSelectedNumbers.length === 0) return

		const numbers = currentSelectedNumbers.map((curEl) => curEl.value)

		const total = numbers.reduce((acc, number) => {
			return (acc += number * 3)
		}, 100)

		setResult(total)
	}, [currentSelectedNumbers])

	const result = state % 2 === 0 ? state : 0

	return result
}
