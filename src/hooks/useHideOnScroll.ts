import { useEffect, useState } from 'react'

export function useHideOnScroll(showBorder?: number) {
	const [prevScroll, setPrevScroll] = useState(window.scrollY)
	const [hide, setHide] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY
			if (prevScroll > currentScroll) {
				setHide(false)
			} else if (prevScroll < currentScroll) {
				setHide(true)
			}
			setPrevScroll(currentScroll)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [prevScroll])

	if (showBorder && showBorder > prevScroll) return false

	return hide
}
