import { useThemeManager } from '../../hooks/useThemeManager'
import { useTheme } from '../../hooks/useTheme'

import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
	const themeManager = useThemeManager()
	const theme = useTheme()

	const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode'

	return (
		<div className={styles.themeToggle} onClick={themeManager.toggleUserTheme}>
			<div className={theme === 'dark' ? 'icon sun s-14' : 'icon moon s-14'}></div>
			<span>{label}</span>
		</div>
	)
}
