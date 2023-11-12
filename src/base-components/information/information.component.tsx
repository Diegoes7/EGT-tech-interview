import React, { useState } from 'react'
import {
	StyledAiFillCloseCircleIcon,
	StyledGiSpikedDragonHeadIcon,
	StyledTbAlertSquareFilledIcon,
} from '../icon-components/icon-styles'
import {
	ChildrenContainer,
	CloseButtonContainer,
	InformationContainer,
	InfoMessageContainer,
} from './information.styles'
import { ButtonIcon } from '../button/button.styles'

type Props = {
	type?: string
	children: React.ReactNode
	closable?: boolean
	onClose?: () => void
}

//! show error message to help the user, and prevent to enter invalid information
export const CustomInformationDialog = ({
	type = 'error',
	children,
	closable,
	onClose,
}: Props) => {
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
		<InformationContainer>
			<ChildrenContainer>
				{closable && (
					<CloseButtonContainer>
						<ButtonIcon
							style={{ backgroundColor: '#dab9d5'}}
							onClick={handleCloseClick}
						>
							<StyledAiFillCloseCircleIcon />
						</ButtonIcon>
					</CloseButtonContainer>
				)}
				<InfoMessageContainer>
					<span style={{marginRight: '0.4rem' }}>
						{type === 'info' ? (
							<StyledGiSpikedDragonHeadIcon />
						) : (
							<StyledTbAlertSquareFilledIcon />
						)}
					</span>
					{children}
				</InfoMessageContainer>
			</ChildrenContainer>
		</InformationContainer>
	)
}
