import React, { useState, useEffect } from 'react'
import { Button } from '../features/button/buttonSlice'

//! custom hook to calculate the sum and decide if you win
//! for now only odd and even numbers
export const useCalculateResult: React.FC<Button[]> = (
	currentSelectedNumbers
) => {
	const [result, setResult] = useState(0)

	useEffect(() => {
		if (currentSelectedNumbers.length === 0) return

		const numbers = currentSelectedNumbers.map((curEl) => curEl.value)

		const total = numbers.reduce((acc, number) => {
			return (acc += number * 3)
		}, 100)

		setResult(total)
	}, [currentSelectedNumbers])

	return result % 2 === 0 ? result : 0
}
