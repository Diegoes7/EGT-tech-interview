import React from 'react'
import { useGetCommentsQuery } from './commentsSlice'
import { useSelector } from 'react-redux'
import Comment, { CommentProps } from './comment.component'

import { CommentsContainer, Title } from './comments.styles'
import { selectChooseButtons } from '../button/button-selector'
import { StyledCommentsIcon } from '../../base-components/icon-components/icon-styles'
import Spinner from '../../base-components/spinner/spinner.component'

interface FetchError {
	message: string
}

const Comments: React.FC = () => {
	const selectedNumbersArray = useSelector(selectChooseButtons)

	const {
		data: comments,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetCommentsQuery()

	let content: React.ReactNode

	if (isLoading) {
		content = <Spinner />
	} else if (isSuccess) {
		//* iterate thorough the received data, check for true/false, so comment is marked or not
		//* return objects, and modify only currently selected comment
		content = comments
			.map((comment: CommentProps, inx: number) => {
				if (inx === selectedNumbersArray.length) {
					return { ...comment, marked: true }
				}
				return { ...comment, marked: false }
			})
			.map(({ id, marked, name }: CommentProps) => (
				<Comment key={id} id={id} marked={marked} name={name} />
			))
	} else if (isError) {
		content = <div>{(error as FetchError).message}</div>
	}

	return (
		<CommentsContainer>
			<Title>
				{' '}
				<StyledCommentsIcon />
				Comments:{' '}
			</Title>
			{content}
		</CommentsContainer>
	)
}

export default Comments
