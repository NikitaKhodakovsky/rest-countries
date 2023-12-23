import { useEffect, useState } from 'react'
import { Theme } from '../services'
import { useThemeManager } from './useThemeManager'

export function useTheme(): Theme {
	const themeManager = useThemeManager()
	const [theme, setTheme] = useState<Theme>(themeManager.getTheme())

	useEffect(() => {
		const unsubscribe = themeManager.subscribe(setTheme)
		return unsubscribe
	}, [themeManager])

	return theme
}
