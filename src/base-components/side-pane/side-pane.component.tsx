import React from 'react'
import {
	DragonContainer,
	RewardDragonContainer,
	RewardSpan,
	SidePaneContainer,
} from './side-pane.styles'
import { StyledGiSpikedDragonHeadIcon } from '../icon-components/icon-styles'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectChooseButtons,
	selectedSpecialTokens,
} from '../../features/button/button-selector'
import { addSpecialToken } from '../../features/button/buttonSlice'
import Button from '../button/button.component'
import { setPrice } from '../../features/price-field/priceSlice'

//$ component that shows only in a specific condition, if select a number from Set
const SidePane = () => {
	const predefinedSpecialTokens = React.useMemo(
		() => new Set([7, 17, 27, 37, 47, 57, 67, 77]),
		[]
	)
	const dispatch = useDispatch()
	const currentSelectedNumbers = useSelector(selectChooseButtons)
	const currentCountSpecialTokens = useSelector(selectedSpecialTokens)
	const tokenCount = useSelector(selectedSpecialTokens)

	const [isPaneOpen, setIsPaneOpen] = React.useState(false)

	//i check if there is selected number, then get the selected number and check if contains in the set
	//i if contains it is add to the redux state up to three
	const checkTokens = React.useCallback(() => {
		if (currentSelectedNumbers.length > 0) {
			const matchingTokens = currentSelectedNumbers.filter((token) =>
				predefinedSpecialTokens.has(token.value)
			)
			dispatch(addSpecialToken(matchingTokens))
			return matchingTokens
		}
	}, [currentSelectedNumbers, dispatch, predefinedSpecialTokens])

	//! when find three special numbers, it's shown a button to get the reward, 
	//! after click you win and start new game
	const closePane = React.useCallback(() => {
		dispatch(setPrice(717171))
		setIsPaneOpen(false)
		window.location.reload()
	}, [dispatch])

	React.useEffect(() => {
		if (tokenCount.length === 1) {
			setIsPaneOpen(true)
		}
	}, [tokenCount.length])

	React.useEffect(() => {
		checkTokens()
	}, [checkTokens, currentSelectedNumbers])

	if (!isPaneOpen) return null

	return (
		<SidePaneContainer>
			<h1>Събери три драконови белега и спечели страхотна награда</h1>
			<h2>Белези: </h2>
			{currentCountSpecialTokens.map((_, inx) => (
				<DragonToken key={inx++} />
			))}
			{currentCountSpecialTokens.length === 3 && (
				<RewardDragonContainer>
					Ти спечели голямата награда: <RewardSpan>717171 лева.</RewardSpan>
					<Button
						style={{ width: '50%' }}
						disabled={tokenCount.length === 3 ? false : true}
						onClick={closePane}
					>
						Вземи
					</Button>
				</RewardDragonContainer>
			)}
		</SidePaneContainer>
	)
}

export default SidePane

//! function that return html
const DragonToken = () => {
	return (
		<DragonContainer>
			<StyledGiSpikedDragonHeadIcon />
		</DragonContainer>
	)
}
