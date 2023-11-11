import React from 'react'
import { useSelector } from 'react-redux'
import Comments from './features/apiSlice/comments.component'
import GameBoard from './features/game-board/game-board.component'
// import SelectedNumbers from './features/selected-numbers/selected-numbers.component'
import Timer from './features/clock/timer.component'
import { selectedLoad } from './features/clock/clock-selector'
import {
	AppContainer,
	GameContainer,
	InnerContainer,
	TitleContainer,
	WrapperTimeComment,
} from './App.styles'
import { GlobalStyles } from './global.styles'
import Header from './base-components/header/header.component'
import WelcomeModal from './base-components/modal/welcome-modal'
import { StyledGiHuntingHornIcon } from './base-components/icon-components/icon-styles'
import SidePane from './base-components/side-pane/side-pane.component'

function App() {
	const loader = useSelector(selectedLoad)
	const [isModalOpen, setModalOpen] = React.useState(false)

	const closeModal = React.useCallback(() => setModalOpen(false), [])

	React.useEffect(() => {
		// Set isModalOpen to true when the component loads
		setModalOpen(true)
	}, [])

	return (
		<AppContainer>
			<GlobalStyles />
			<WelcomeModal isOpen={isModalOpen} handleClose={closeModal} />
			<GameContainer>
				<TitleContainer>
					<StyledGiHuntingHornIcon /> The Great Hunt
				</TitleContainer>
				<Header />
				<GameBoard />
			</GameContainer>
			<WrapperTimeComment>
				<Timer isOpen={isModalOpen} />
				<InnerContainer>
					<SidePane />
					{loader && isModalOpen === false && <Comments />}
				</InnerContainer>
			</WrapperTimeComment>
		</AppContainer>
	)
}

export default App
