import React, { FC, ButtonHTMLAttributes } from 'react'
import { BaseButton, ButtonSpinner, ModifyButton } from './button.styles'

export enum BUTTON_TYPE_CLASSES {
	/* eslint-disable no-unused-vars */
	base = 'base',
	modify = 'modify',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.modify]: ModifyButton,
	}[buttonType])

export type ButtonProps = {
	buttonType?: BUTTON_TYPE_CLASSES
	isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType)
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	)
}

export default Button
