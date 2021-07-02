import { useTheme } from 'react-theme-lib'

import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode'

	return (
		<div className={styles.themeToggle} onClick={toggleTheme}>
			<div className={theme === 'dark' ? 'icon sun s-14' : 'icon moon s-14'}></div>
			<span>{label}</span>
		</div>
	)
}
