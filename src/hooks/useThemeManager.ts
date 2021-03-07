import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

export function useThemeManager() {
	const themeManager = useContext(ThemeContext)
	return themeManager
}
