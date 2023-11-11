import React, { useCallback } from 'react'
import {
	MainSelectedNumbersContainer,
	SelectedNumberContainer,
} from './selected-numbers.styles'
import { useDispatch, useSelector } from 'react-redux'
import SelectedNumbers from '../../features/selected-numbers/selected-numbers.component'
import {
	selectChooseButtons,
	showSelectedNumbersSlice,
} from '../button/button-selector'
import { showSelectedNumbers } from '../button/buttonSlice'
import { StyledPiListNumbersFillIcon } from '../../base-components/icon-components/icon-styles'
import Button from '../../base-components/button/button.component'

const MainSelectedNumbers = () => {
	const dispatch = useDispatch()
	const currentSelected = useSelector(selectChooseButtons)
	const isShow = useSelector(showSelectedNumbersSlice)

	const handleToggle = useCallback(() => {
		try {
			dispatch(showSelectedNumbers(!isShow))
		} catch (error) {
			alert('Nothing for now.')
		}
	}, [dispatch, isShow])

	return (
		<MainSelectedNumbersContainer>
			<Button onClick={handleToggle} type='button'>
				<StyledPiListNumbersFillIcon />
				Избрани числа:{' '}
				<span style={{ marginLeft: '.2rem', fontSize: '1rem' }}>
					{currentSelected.length}
				</span>
			</Button>
			{isShow && (
				<SelectedNumberContainer>
					<SelectedNumbers handleToggle={handleToggle} />
				</SelectedNumberContainer>
			)}
		</MainSelectedNumbersContainer>
	)
}

export default MainSelectedNumbers
