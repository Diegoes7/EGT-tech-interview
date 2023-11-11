import React, { InputHTMLAttributes } from 'react'
import { InputLabel, Group, Input } from './base-input.styles'

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const BaseInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			{label && <InputLabel>{label}</InputLabel>}
			<Input {...otherProps} />
		</Group>
	)
}

export default BaseInput
