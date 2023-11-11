import React from 'react'
import dragonImage from '../../assets/dragon.jpg'
import { ModalView, Overlay, StyledImage, TextContainer } from './modal.styles'
import {
	StyledCgEnterIcon,
	StyledGiClosedBarbuteIcon,
} from '../icon-components/icon-styles'
import Button from '../button/button.component'

type Props = {
	isOpen: boolean
	handleClose: () => void
}

const WelcomeModal = ({ isOpen, handleClose }: Props) => {
	if (!isOpen) return null

	return (
		<Overlay>
			<ModalView resizeContainer={false}>
				<StyledImage src={dragonImage} alt='Description of Image' />
				<TextContainer>
					<h2 style={{ textIndent: '1.5rem' }}>
						{' '}
						Здравей приключенецо, <StyledGiClosedBarbuteIcon />.
					</h2>
					<h2>
						Готов ли си да сразиш могъщ дракон и да спечелиш неизмерима награда?
						Сигурен съм, че си.
					</h2>
					<h2 style={{ textIndent: '1.5rem' }}>
						Следи внимателно къде стъпваш, защото стъпките ти ще отведат до
						успех или до......
					</h2>
					<h2 style={{ textIndent: '1.5rem' }}>
						Когато си готов, просто натисни бутона.
					</h2>
				</TextContainer>
				<Button onClick={handleClose}>
					Започни игра
					<StyledCgEnterIcon />
				</Button>
			</ModalView>
		</Overlay>
	)
}

export default WelcomeModal
