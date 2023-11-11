import { useRef, useEffect, useCallback } from 'react'

type Callback = () => void

//$ when click outside the dialog window close it
function useOutsideClick(show: boolean, onOutsideClick: Callback) {
	const modalRef = useRef<HTMLDivElement | null>(null)

	const handleClose = useCallback(() => {
		onOutsideClick()
	}, [onOutsideClick])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				handleClose()
			}
		}

		if (show) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [show, handleClose])

	return modalRef
}

export default useOutsideClick
