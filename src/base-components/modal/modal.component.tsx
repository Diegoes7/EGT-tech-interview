import React from 'react'
import { ModalView, Overlay } from './modal.styles'
import Button from '../button/button.component'
import {
	StyledCgEnterIcon,
	StyledFaCoinsIcon,
} from '../icon-components/icon-styles'
import { selectChooseButtons } from '../../features/button/button-selector'
import { useSelector } from 'react-redux'
import { useCalculateResult } from '../../hooks/useCalculateResult'

type Props = {
	isOpen: boolean
	result: number
	handleClose?: () => void
}

const WinOrLoose: React.FC<Props> = ({ isOpen, handleClose }) => {
	const currentSelectedNumbers = useSelector(selectChooseButtons)
	const calculatedResult = useCalculateResult(currentSelectedNumbers)

	if (!isOpen) return null

	//! depends on the result, it shows different message
	const message = {
		first: '',
		second: '',
	}
	if (calculatedResult === 0) {
		message.first = 'Игра добре, но загуби. Опитай пак.'
		message.second = 'Няма награда за теб този път.'
	} else {
		message.first = 'Игра добре и спечели.'
		message.second = `Твоята награда е ${calculatedResult} лева.`
	}

	return (
		<Overlay>
			<ModalView resizeContainer={true}>
				<h2>{message.first}</h2>
				<h2>{message.second}</h2>
				<StyledFaCoinsIcon />
				<Button onClick={handleClose}>
					Започни нова игра
					<StyledCgEnterIcon />
				</Button>
			</ModalView>
		</Overlay>
	)
}

export default WinOrLoose
