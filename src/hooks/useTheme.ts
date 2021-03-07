import { useEffect, useState } from 'react'

import { useThemeManager } from './useThemeManager'
import { Theme } from '../services/ThemeManager'

export function useTheme(): Theme {
	const themeManager = useThemeManager()
	const [theme, setTheme] = useState<Theme>(themeManager.getTheme())

	useEffect(() => {
		const unsubscribe = themeManager.subscribe(setTheme)
		return unsubscribe
	}, [themeManager])

	return theme
}
