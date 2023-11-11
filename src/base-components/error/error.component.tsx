import React, { useState } from 'react'
import {
	StyledAiFillCloseCircleIcon,
	StyledTbAlertSquareFilledIcon,
} from '../icon-components/icon-styles'
import {
	ChildrenContainer,
	CloseButtonContainer,
	ErrorContainer,
	ErrorMessageContainer,
} from './error.styles'
import { ButtonIcon } from '../button/button.styles'

type Props = {
	children: React.ReactNode
	closable?: boolean
	onClose?: () => void
}

//! show error message to help the user, and prevent to enter invalid information
export const CustomError = ({ children, closable, onClose }: Props) => {
	const [visible, setVisible] = useState<boolean>(true)

	if (!visible) {
		return null
	}

	function handleCloseClick() {
		setVisible(false)
		if (onClose) {
			onClose()
		}
	}

	return (
		<ErrorContainer>
			<ChildrenContainer>
				{closable && (
					<CloseButtonContainer>
						<ButtonIcon
							style={{ backgroundColor: '#dab9d5' }}
							onClick={handleCloseClick}
						>
							<StyledAiFillCloseCircleIcon />
						</ButtonIcon>
					</CloseButtonContainer>
				)}
				<ErrorMessageContainer>
					<span>
						<StyledTbAlertSquareFilledIcon />
					</span>
					{children}
				</ErrorMessageContainer>
			</ChildrenContainer>
		</ErrorContainer>
	)
}
