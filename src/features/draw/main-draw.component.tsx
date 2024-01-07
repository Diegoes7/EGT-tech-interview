import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedDraws, selectedDrawShow } from './draw-selector'
import Button from '../../base-components/button/button.component'
import { showDrawDetails } from './drawSlice'
import DrawField from './draw-field.component'
import { DrawContainer, MainDrawContainer } from './draw-field.styles'
import { StyledAiFillRocketIcon } from '../../base-components/icon-components/icon-styles'
import { HeaderCurrentNumber } from '../../base-components/header/header.styles'

const MainDraw = () => {
	const currentDraw = useSelector(selectedDraws)
	const dispatch = useDispatch()
	const isShow = useSelector(selectedDrawShow)

	const handleToggle = React.useCallback(() => {
		try {
			dispatch(showDrawDetails(!isShow))
		} catch (error) {
			alert('Nothing for now.')
		}
	}, [dispatch, isShow])

	return (
		<MainDrawContainer>
			<Button style={{ width: '100%' }} onClick={handleToggle}>
				<StyledAiFillRocketIcon />
				Теглене: <HeaderCurrentNumber>{currentDraw}</HeaderCurrentNumber>
			</Button>
			{isShow && (
				<DrawContainer>
					<DrawField handleToggle={handleToggle} />
				</DrawContainer>
			)}
		</MainDrawContainer>
	)
}

export default MainDraw
