import { useSelector, useDispatch } from 'react-redux'
import { disabledBtns, enableBtns } from '../button/buttonSlice'

import ButtonNumber from '../button/button-number.component'
import { GameBoardContainer } from './game-board.styles'
import {
	selectChooseButtons,
	selectedBoard,
	selectedResult,
} from '../button/button-selector'
import React from 'react'
import WinOrLoose from '../../base-components/modal/modal.component'

const GameBoard = () => {
	const dispatch = useDispatch()
	//! get slice of the state
	const board = useSelector(selectedBoard)
	const selectedBtns = useSelector(selectChooseButtons)
	const currentResult = useSelector(selectedResult)
	const [isModalOpen, setModalOpen] = React.useState(false)

	//! condition, if there are 12 selected elements, the other 68 elements are disabled
	const maxSelectedFields = selectedBtns.length === 12
	const disabledFields = React.useCallback(() => {
		if (maxSelectedFields) {
			dispatch(disabledBtns())
		} else {
			dispatch(enableBtns())
		}
	}, [maxSelectedFields, dispatch])

	React.useEffect(() => {
		disabledFields()
	}, [disabledFields])

	//! close and start new game
	const handleClose = React.useCallback(() => {
		window.location.reload()
	}, [])

	//! set when hit a sum above to trigger automatic win/loose, for more fun
	React.useEffect(() => {
		if (currentResult >= 473) {
			setModalOpen(true)
		}
	}, [currentResult])

	//* pass through the array and fill every the Button component
	//* with props/ values
	const startingBoard = React.useMemo(
		() =>
			board.map((cur, inx) => (
				<ButtonNumber
					key={inx}
					value={++inx}
					disabled={cur.disabled}
					id={String(inx++)}
					selected={cur.selected}
				/>
			)),
		[board]
	)

	return (
		<>
			<WinOrLoose
				isOpen={isModalOpen}
				handleClose={handleClose}
				result={currentResult || 0}
			/>
			<GameBoardContainer>
				{startingBoard ? startingBoard : 'No Board'}
			</GameBoardContainer>
		</>
	)
}

export default GameBoard
