import { useEffect } from 'react'

import { useTheme } from '../hooks/useTheme'

export function ThemeColorMeta() {
	const theme = useTheme()

	useEffect(() => {
		const meta = document.getElementById('theme-color-meta')

		if (meta) {
			const bg = getComputedStyle(document.body).getPropertyValue('--element-bg')

			meta.setAttribute('content', bg)
		}
	}, [theme])

	return null
}
