import styled, { css, keyframes } from 'styled-components'
import {
	BetMoneyIcon,
	CommentsIcon,
	AiFillRocketIcon,
	PiListNumbersFillIcon,
	FaMoneyBillTransferIcon,
	GiCrossedAxesIcon,
	CgSandClockIcon,
	BiSolidHideIcon,
	TbMoneybagIcon,
	GiSwapBagIcon,
	FaEraserIcon,
	HiPlusCircleIcon,
	BiSolidMinusCircleIcon,
	BsBookmarkCheckFillIcon,
	AiFillCloseCircleIcon,
	GiConfirmedIcon,
	GiClosedBarbuteIcon,
	CgEnterIcon,
	GiHuntingHornIcon,
	GiSpikedDragonHeadIcon,
	TbAlertSquareFilledIcon,
	FaCoinsIcon,
	TiTickIcon,
} from './icons.component'
import {
	customBorderRadius,
	mainRedColor,
	mainYellowColor,
	secondRedColor,
} from '../../App.styles'

const customIconStyles = css`
	margin-right: 0.4rem;
	font-size: 1.2rem;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledCommentsIcon = styled(CommentsIcon)`
	margin-right: 0.3rem;
`

export const StyledBetMoneyIcon = styled(BetMoneyIcon)`
	${customIconStyles}
`

export const StyledAiFillRocketIcon = styled(AiFillRocketIcon)`
	${customIconStyles}
`

export const StyledPiListNumbersFillIcon = styled(PiListNumbersFillIcon)`
	${customIconStyles}
`
export const StyledFaMoneyBillTransferIcon = styled(FaMoneyBillTransferIcon)`
	${customIconStyles}
`

export type DisabledProp = {
	disabled: boolean
}

const disabledStyles = css`
	background-color: rgb(11, 119, 207);
	color: white;
`

export const StyledGiCrossedAxesIcon = styled(GiCrossedAxesIcon)<DisabledProp>`
	color: ${mainYellowColor};
	background-color: rgba(239, 9, 24, 0.86);
	font-size: 3.3rem;
	box-shadow: rgba(207, 18, 31, 0.5) 0px 50px 100px -20px,
		rgba(203, 197, 197, 0.5) 0px 30px 60px -30px,
		rgba(213, 202, 203, 0.5) 0px -2px 6px 0px inset;
	border: 0.2rem solid black;
	${customBorderRadius}

	&:hover {
		color: black;
	}

	${({ disabled }) => disabled && disabledStyles}

	@media screen and (max-width: 650px) {
		border: none;
		font-size: 3rem;
	}
`

export const StyledCgSandClockIcon = styled(CgSandClockIcon)`
	${customIconStyles}
	animation: ${rotate} 2s linear infinite;
`

export const StyledBiSolidHideIcon = styled(BiSolidHideIcon)`
	${customIconStyles}
`

export const StyledTbMoneybagIcon = styled(TbMoneybagIcon)`
	${customIconStyles}
`

export const StyledGiSwapBagIcon = styled(GiSwapBagIcon)`
	${customIconStyles}
`

export const StyledFaEraserIcon = styled(FaEraserIcon)`
	${customIconStyles}
`

export const StyledHiPlusCircleIcon = styled(HiPlusCircleIcon)`
	color: ${mainRedColor};
	font-size: 1.8rem;
	border-radius: 1rem;

	&:hover {
		color: white;
		background-color: ${mainRedColor};
		transform: all 1s ease-in-out;
	}
`

const disabledIconStyles = css`
	color: #b0b0cb;
`

export type DisabledIconProp = {
	disabledIcon?: boolean
}

export const StyledBiSolidMinusCircleIcon = styled(
	BiSolidMinusCircleIcon
)<DisabledIconProp>`
	color: ${mainRedColor};
	font-size: 1.8rem;
	border-radius: 1rem;

	&:hover {
		color: white;
		background-color: ${mainRedColor};
		translate: all 1s ease-in-out;
	}

	${({ disabledIcon }) => (disabledIcon === true ? disabledIconStyles : '')}
`

export const StyledBsBookmarkCheckFillIcon = styled(BsBookmarkCheckFillIcon)`
	${customIconStyles}
`

export const StyledAiFillCloseCircleIcon = styled(AiFillCloseCircleIcon)`
	color: ${mainRedColor};
	font-size: 1.8rem;
	border-radius: 1rem;

	&:hover {
		color: white;
		background-color: ${mainRedColor};
		transform: all 1s ease-in-out;
	}
`

export const StyledGiConfirmedIcon = styled(GiConfirmedIcon)`
	${customIconStyles}
`

export const StyledGiClosedBarbuteIcon = styled(GiClosedBarbuteIcon)`
	font-size: 2rem;
`

export const StyledCgEnterIcon = styled(CgEnterIcon)`
	font-size: 1.3rem;
	margin-left: 0.5rem;
`

export const StyledGiHuntingHornIcon = styled(GiHuntingHornIcon)`
	font-size: 2rem;
	margin: 0.5rem;
`

export const StyledGiSpikedDragonHeadIcon = styled(GiSpikedDragonHeadIcon)`
	font-size: 3.5rem;
	color: rgb(9 70 72);
	background-color: rgb(205 39 39);
	border-radius: 0.75rem;

	@media screen and (max-width: 480px) {
		font-size: 2.5rem;
	}
`

export const StyledTbAlertSquareFilledIcon = styled(TbAlertSquareFilledIcon)`
	font-size: 2rem;
	color: ${secondRedColor};
	padding-right: 0.2rem;
`

export const StyledFaCoinsIcon = styled(FaCoinsIcon)`
	font-size: 3rem;
	color: ${mainYellowColor};
	${customBorderRadius}
	background-color: #2f2222;
	padding: 0.7rem;
	margin: 1rem;
`

export const StyledTiTickIcon = styled(TiTickIcon)``
