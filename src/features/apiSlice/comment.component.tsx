import React from 'react'
import { LineComment } from './comments.styles'

export type CommentProps = {
	id: string
	marked: boolean
	name: string
}

const Comment = ({ id, marked, name }: CommentProps) => {
	return (
		<>
			<LineComment key={id}>
				{id}: {name}
				{marked ? '    ⚔️' : ''}
			</LineComment>
		</>
	)
}

export default Comment
