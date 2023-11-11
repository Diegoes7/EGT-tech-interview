import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showSelectedNumbers } from '../button/buttonSlice'
import {
	CurrentResultContainer,
	SelectedButtons,
	SelectedNumbersContainer,
	SelectedNumbersRow,
	TitleSelectedNumbersContainer,
} from './selected-numbers.styles'
import {
	showSelectedNumbersSlice,
	selectChooseButtons,
	selectedResult,
} from '../button/button-selector'
import useOutsideClick from '../../hooks/useOutsideClick'
import { ButtonIcon } from '../../base-components/button/button.styles'
import Button from '../../base-components/button/button.component'
import {
	StyledAiFillCloseCircleIcon,
	StyledGiConfirmedIcon,
} from '../../base-components/icon-components/icon-styles'
import WinOrLoose from '../../base-components/modal/modal.component'

export type Props = {
	handleToggle: () => void
}

const SelectedNumbers: React.FC<Props> = ({ handleToggle }) => {
	//! get slices of the state
	const currentSelectedNumbers = useSelector(selectChooseButtons)
	const currentResult = useSelector(selectedResult)
	const isShow = useSelector(showSelectedNumbersSlice)
	const dispatch = useDispatch()
	const [isModalOpen, setModalOpen] = React.useState(false)
	const modalRef = useOutsideClick(isShow, () => {
		dispatch(showSelectedNumbers(!isShow))
	})

	const handleCheckReward = React.useCallback(() => {
		setModalOpen(true)
	}, [])

	const handleClose = React.useCallback(() => {
		window.location.reload()
	}, [])

	if (!isShow) return null

	//! iterate thorough [] and show the selected numbers
	return (
		<SelectedButtons ref={modalRef}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<ButtonIcon onClick={handleToggle}>
					<StyledAiFillCloseCircleIcon />
				</ButtonIcon>
			</div>
			<TitleSelectedNumbersContainer>
				Избрани числа:
			</TitleSelectedNumbersContainer>
			<SelectedNumbersContainer>
				{currentSelectedNumbers
					.map((sln) => (
						<SelectedNumbersRow key={sln.id}>{sln.value}</SelectedNumbersRow>
					))
					.reverse()}
			</SelectedNumbersContainer>
			<CurrentResultContainer>{currentResult}</CurrentResultContainer>
			<Button style={{ height: '2rem' }} onClick={handleCheckReward}>
				<StyledGiConfirmedIcon />
				Изпрати
			</Button>
			<WinOrLoose
				result={currentResult}
				isOpen={isModalOpen}
				handleClose={handleClose}
			/>
		</SelectedButtons>
	)
}

export default SelectedNumbers
