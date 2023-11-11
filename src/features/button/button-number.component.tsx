import React, { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Button, addNumber, getResult, toggleBtn } from './buttonSlice'

import { BoardButton } from './button-number.styles'
import { StyledGiCrossedAxesIcon } from '../../base-components/icon-components/icon-styles'

//! pass props from game board component to populate values
const ButtonNumber: React.FC<Button> = ({ id, value, selected, disabled }) => {
	const dispatch = useDispatch()

	//* get target element and pass it to the store to update state
	//* change the state, and add the selected number to [] 
	//* add the target to the redux result slice
	const handleButton = React.useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const { id, value } = e.currentTarget as HTMLButtonElement
			dispatch(toggleBtn(id))
			dispatch(addNumber())
			dispatch(getResult(+value))
		},
		[dispatch]
	)

	return (
		<BoardButton
			id={id}
			disabled={disabled}
			onClick={handleButton}
			value={value}
			selectedButton={Boolean(selected === true)}
		>
			{selected ? (
				value
			) : (
				<StyledGiCrossedAxesIcon disabled={Boolean(disabled)} />
			)}
		</BoardButton>
	)
}

export default ButtonNumber
