import React from 'react'
import { FaBeer, FaComments, FaEraser } from 'react-icons/fa'
import {
	GiTakeMyMoney,
	GiCrossedAxes,
	GiSpikedDragonHead,
} from 'react-icons/gi'
import { AiFillRocket, AiFillCloseCircle } from 'react-icons/ai'
import { PiListNumbersFill } from 'react-icons/pi'
import { FaCoins, FaMoneyBillTransfer } from 'react-icons/fa6'
import { CgSandClock, CgEnter } from 'react-icons/cg'
import { BiSolidHide, BiSolidMinusCircle } from 'react-icons/bi'
import { TbMoneybag, TbAlertSquareFilled } from 'react-icons/tb'
import {
	GiSwapBag,
	GiConfirmed,
	GiClosedBarbute,
	GiHuntingHorn,
} from 'react-icons/gi'
import { HiPlusCircle } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'
import { BsBookmarkCheckFill } from 'react-icons/bs'

interface AppIconProps extends React.HTMLProps<HTMLDivElement> {}

export const Beer = () => <FaBeer />

export const CommentsIcon: React.FC<AppIconProps> = (props) => (
	<FaComments className={props.className} />
)

export const BetMoneyIcon: React.FC<AppIconProps> = (props) => (
	<GiTakeMyMoney className={props.className} />
)

export const AiFillRocketIcon: React.FC<AppIconProps> = (props) => (
	<AiFillRocket className={props.className} />
)

export const PiListNumbersFillIcon: React.FC<AppIconProps> = (props) => (
	<PiListNumbersFill className={props.className} />
)

export const FaMoneyBillTransferIcon: React.FC<AppIconProps> = (props) => (
	<FaMoneyBillTransfer className={props.className} />
)

export const GiCrossedAxesIcon: React.FC<AppIconProps> = (props) => (
	<GiCrossedAxes className={props.className} />
)

export const BiSolidHideIcon: React.FC<AppIconProps> = (props) => (
	<BiSolidHide className={props.className} />
)

export const CgSandClockIcon: React.FC<AppIconProps> = (props) => (
	<CgSandClock className={props.className} />
)

export const TbMoneybagIcon: React.FC<AppIconProps> = (props) => (
	<TbMoneybag className={props.className} />
)

export const GiSwapBagIcon: React.FC<AppIconProps> = (props) => (
	<GiSwapBag className={props.className} />
)

export const FaEraserIcon: React.FC<AppIconProps> = (props) => (
	<FaEraser className={props.className} />
)

export const HiPlusCircleIcon: React.FC<AppIconProps> = (props) => (
	<HiPlusCircle className={props.className} />
)

export const BiSolidMinusCircleIcon: React.FC<AppIconProps> = (props) => (
	<BiSolidMinusCircle className={props.className} />
)

export const BsBookmarkCheckFillIcon: React.FC<AppIconProps> = (props) => (
	<BsBookmarkCheckFill className={props.className} />
)

export const AiFillCloseCircleIcon: React.FC<AppIconProps> = (props) => (
	<AiFillCloseCircle className={props.className} />
)

export const GiConfirmedIcon: React.FC<AppIconProps> = (props) => (
	<GiConfirmed className={props.className} />
)

export const GiClosedBarbuteIcon: React.FC<AppIconProps> = (props) => (
	<GiClosedBarbute className={props.className} />
)

export const CgEnterIcon: React.FC<AppIconProps> = (props) => (
	<CgEnter className={props.className} />
)

export const GiHuntingHornIcon: React.FC<AppIconProps> = (props) => (
	<GiHuntingHorn className={props.className} />
)

export const GiSpikedDragonHeadIcon: React.FC<AppIconProps> = (props) => (
	<GiSpikedDragonHead className={props.className} />
)

export const TbAlertSquareFilledIcon: React.FC<AppIconProps> = (props) => (
	<TbAlertSquareFilled className={props.className} />
)

export const FaCoinsIcon: React.FC<AppIconProps> = (props) => (
	<FaCoins className={props.className} />
)

export const TiTickIcon: React.FC<AppIconProps> = (props) => (
	<TiTick className={props.className} />
)
