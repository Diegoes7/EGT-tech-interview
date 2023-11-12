import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	incrementByAmount,
	increment,
	decrement,
	reset,
	showBetDetails,
} from './bettingSlice'
import { BetFieldContainer, InputContainer, FinalBet } from './bet.styles'
import { selectedBet, selectedBetShow } from './bet-selector'
import BaseInput from '../../base-components/base-input/base-input.component'
import Button from '../../base-components/button/button.component'
import { ButtonIcon } from '../../base-components/button/button.styles'
import { ButtonContainer } from '../draw/draw-field.styles'
import { Props } from '../selected-numbers/selected-numbers.component'
import useOutsideClick from '../../hooks/useOutsideClick'
import {
	StyledAiFillCloseCircleIcon,
	StyledBetMoneyIcon,
	StyledBiSolidMinusCircleIcon,
	StyledFaEraserIcon,
	StyledHiPlusCircleIcon,
} from '../../base-components/icon-components/icon-styles'
import { CustomInformationDialog } from '../../base-components/information/information.component'

//i component is shown in modal => click his main
const BetField: React.FC<Props> = ({ handleToggle }) => {
	const dispatch = useDispatch()
	const currentBet = useSelector(selectedBet)
	const isShow = useSelector(selectedBetShow)
	const modalRef = useOutsideClick(isShow, () => {
		dispatch(showBetDetails(!isShow))
	})

	//$ set local state to show the default value - 1
	const [value, setValue] = useState<string>(currentBet.toString())
	const [error, setError] = useState<string>('')

	const regexPattern = /^(\d+\.?\d{0,2}|\.\d{0,2})$/

	//i get the event {}, and then his value and pass it to the local state
	//* then fire action and pass value to the redux store, to update the state
	//* and sync with UI
	const validateNumber = (event: ChangeEvent<HTMLInputElement>): void => {
		const inputValue = event.target.value
		const isValid = regexPattern.test(inputValue) || inputValue === ''

		//! Check if the input value is a number and in teh range of 2 digits after the dot
		if (isValid) {
			setError('')
			setValue(inputValue)
		} else {
			setError(
				'Невалиден вход! Разрешени са само числа до два знака след десетичната запетая.'
			)
		}
	}

	const handleIncrement = React.useCallback(
		() => dispatch(increment()),
		[dispatch]
	)

	const handleDecrement = React.useCallback(
		() => dispatch(decrement()),
		[dispatch]
	)

	const handleBetByAmount = React.useCallback(() => {
		dispatch(incrementByAmount(Number(value)))
		dispatch(showBetDetails(false))
	}, [dispatch, value])

	//! reset bet and input, start over
	const resetBetToInitial = React.useCallback(() => {
		setValue('1')
		dispatch(reset())
	}, [dispatch])

	if (!isShow) return null

	const notNegativeNumber: boolean = currentBet <= 0.0
	const buttonDisabled = value.length === 0 || Number(value) === 0

	//! use to fixed to show only 2 digits after the dot, in the state i keep it as a number
	//! use array function to be brief and don't cause performance issue
	//* also to show that I heard of them
	//
	return (
		<BetFieldContainer ref={modalRef}>
			<div
				style={{
					display: 'flex',
					alignSelf: 'flex-end',
				}}
			>
				<ButtonIcon onClick={handleToggle}>
					<StyledAiFillCloseCircleIcon />
				</ButtonIcon>
			</div>
			<FinalBet>Залог: {currentBet.toFixed(2)} лв.</FinalBet>
			<InputContainer>
				<ButtonContainer>
					<ButtonIcon onClick={handleIncrement}>
						<StyledHiPlusCircleIcon />
					</ButtonIcon>
					<ButtonIcon disabled={notNegativeNumber} onClick={handleDecrement}>
						<StyledBiSolidMinusCircleIcon disabled={notNegativeNumber} />
					</ButtonIcon>
				</ButtonContainer>
				<BaseInput
					type='string'
					placeholder='въведи цифра'
					label='Направете своя залог'
					name='betInput'
					autoFocus
					value={value}
					onChange={validateNumber}
					pattern={regexPattern.toString()}
				/>
				<span> лв.</span>
			</InputContainer>
			<div
				style={{
					display: 'flex',
					alignItems: 'space-between',
					justifyContent: 'space-evenly',
				}}
			>
				<Button disabled={buttonDisabled} onClick={handleBetByAmount}>
					<StyledBetMoneyIcon />
					Заложи
				</Button>
				<Button disabled={buttonDisabled} onClick={resetBetToInitial}>
					<StyledFaEraserIcon />
					Изтрий
				</Button>
			</div>
			{error && (
				<CustomInformationDialog closable={true}>
					{error}
				</CustomInformationDialog>
			)}
		</BetFieldContainer>
	)
}

export default BetField
