import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	incrementByAmount,
	increment,
	decrement,
	showDrawDetails,
} from './drawSlice'

import {
	DrawTitle,
	DrawFieldContainer,
	ButtonContainer,
} from './draw-field.styles'
import { InputContainer } from '../betting/bet.styles'
import { selectedDrawShow, selectedDraws } from './draw-selector'
import BaseInput from '../../base-components/base-input/base-input.component'
import Button from '../../base-components/button/button.component'
import { ButtonIcon } from '../../base-components/button/button.styles'
import { Props } from '../selected-numbers/selected-numbers.component'
import useOutsideClick from '../../hooks/useOutsideClick'
import {
	StyledAiFillCloseCircleIcon,
	StyledBiSolidMinusCircleIcon,
	StyledBsBookmarkCheckFillIcon,
	StyledHiPlusCircleIcon,
} from '../../base-components/icon-components/icon-styles'
import { CustomError } from '../../base-components/error/error.component'

const DrawField: React.FC<Props> = ({ handleToggle }) => {
	// get slice of the state and use in UI component
	const currentDraw = useSelector(selectedDraws)
	const isShow = useSelector(selectedDrawShow)
	const modalRef = useOutsideClick(isShow, () => {
		dispatch(showDrawDetails(!isShow))
	})

	//* trigger action to the store
	const dispatch = useDispatch()
	const [value, setValue] = useState<string>(currentDraw.toString())
	const [error, setError] = useState<string>('')

	//$ get event object and pass it to update the store
	//* validate to enter only whole numbers, and implement a simple alert
	//* to notify user that do smt wrong, and reset the draw to initial state
	const validateNumber = React.useCallback(
		(event: ChangeEvent<HTMLInputElement>): void => {
			const inputValue = event.target.value

			if (isNaN(Number(inputValue)) || inputValue.includes('.')) {
				setError('Разрешени са само цели числа')
			} else {
				setError('')
				setValue(inputValue)
			}
		},
		[]
	)

	const handleDecrement = React.useCallback(
		() => dispatch(decrement()),
		[dispatch]
	)
	const handleIncrement = React.useCallback(
		() => dispatch(increment()),
		[dispatch]
	)

	const handleBetByAmount = React.useCallback(() => {
		dispatch(incrementByAmount(Number(value)))
		dispatch(showDrawDetails(false))
	}, [dispatch, value])

	if (!isShow) return null

	// input is type text because of the arrays is annoying
	return (
		<DrawFieldContainer ref={modalRef}>
			<div
				style={{
					display: 'flex',
					alignSelf: 'flex-end',
					paddingRight: '1rem',
				}}
			>
				<ButtonIcon onClick={handleToggle}>
					<StyledAiFillCloseCircleIcon />
				</ButtonIcon>
			</div>
			<DrawTitle>Тегления: {currentDraw}</DrawTitle>
			<InputContainer>
				<ButtonContainer>
					<ButtonIcon onClick={handleIncrement}>
						<StyledHiPlusCircleIcon />
					</ButtonIcon>
					<ButtonIcon onClick={handleDecrement}>
						<StyledBiSolidMinusCircleIcon />
					</ButtonIcon>
				</ButtonContainer>
				<BaseInput
					type='text'
					label='Изберете брой тегления'
					placeholder='само цели числа'
					name='betInput'
					autoFocus
					value={value}
					onChange={validateNumber}
					pattern='^[0-9]*$'
				/>
			</InputContainer>
			<div
				style={{
					display: 'flex',
					alignSelf: 'flex-end',
					margin: '1.0rem',
				}}
			>
				<Button disabled={value.length === 0} onClick={handleBetByAmount}>
					<StyledBsBookmarkCheckFillIcon />
					Избери
				</Button>
			</div>
			{error && <CustomError closable={true}>{error}</CustomError>}
		</DrawFieldContainer>
	)
}

export default DrawField
