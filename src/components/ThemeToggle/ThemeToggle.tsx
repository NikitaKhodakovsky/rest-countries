import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as far from '@fortawesome/free-regular-svg-icons'
import { useTheme } from 'react-theme-lib'

import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode'

	return (
		<div className={styles.themeToggle} onClick={toggleTheme}>
			<FontAwesomeIcon icon={far.faMoon} />
			<span>{label}</span>
		</div>
	)
}
