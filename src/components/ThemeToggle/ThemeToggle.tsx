import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as far from '@fortawesome/free-regular-svg-icons'

import styles from './ThemeToggle.module.scss'
import { useTheme } from '../../hooks/useTheme'
import { useThemeManager } from '../../hooks/useThemeManager'

export function ThemeToggle() {
	const themeManager = useThemeManager()
	const theme = useTheme()

	const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode'

	return (
		<div className={styles.themeToggle} onClick={themeManager.toggleUserTheme}>
			<FontAwesomeIcon icon={far.faMoon} />
			<span>{label}</span>
		</div>
	)
}
