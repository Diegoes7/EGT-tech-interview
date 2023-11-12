import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clockTick, reset, loadComments, hideComments } from './clockSlice'
import { useGetCommentsQuery } from '../apiSlice/commentsSlice'

import { OuterContainer, TimerContainer, TimerSpan } from './timer.styles'
import { selectedClockTime } from './clock-selector'
import Button from '../../base-components/button/button.component'
import {
	StyledBiSolidHideIcon,
	StyledCgSandClockIcon,
} from '../../base-components/icon-components/icon-styles'

type Props = {
	isOpen: boolean
}

const Timer: React.FC<Props> = ({ isOpen }) => {
	const dispatch = useDispatch()
	const currentTimer = useSelector(selectedClockTime)
	const { isSuccess } = useGetCommentsQuery()

	const hideCommentsFunc = React.useCallback(() => dispatch(hideComments()), [dispatch])

	const min = String(Math.trunc(currentTimer / 60)).padStart(2, '0')
	const sec = String(currentTimer % 60).padStart(2, '0')

	if (currentTimer <= 0 && isSuccess) {
		dispatch(loadComments())
		dispatch(reset())
	}

	useEffect(() => {
		const interval = setInterval(
			() => isOpen === false && dispatch(clockTick()),
			1000
		)
		return () => clearInterval(interval)
	}, [isOpen, dispatch])

	return (
		<OuterContainer>
			<Button onClick={hideCommentsFunc}>
				<StyledBiSolidHideIcon />
				Скрий
			</Button>
			<TimerContainer>
				<StyledCgSandClockIcon />
				<TimerSpan>Timer: </TimerSpan>
				<span>
					{min}:{sec}
				</span>
			</TimerContainer>
		</OuterContainer>
	)
}

export default Timer
