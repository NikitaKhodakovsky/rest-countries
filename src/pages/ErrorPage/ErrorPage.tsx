import { useTitle } from '../../hooks/useTitle'

import styles from './ErrorPage.module.scss'

export interface ErrorPageProps {
	title?: string
	subtitle?: string
	onClick?: () => any
	buttonText?: string
	className?: string
}

export function ErrorPage({ title = 'OOPS!', subtitle = 'Something went wrong.', buttonText, onClick, className }: ErrorPageProps) {
	useTitle(title)

	return (
		<div className={`${styles.error} ${className ?? ''}`}>
			<div className={styles.title}>{title}</div>
			<div className={styles.subtitle}>{subtitle}</div>
			<button className={styles.homeButton} onClick={onClick}>
				{buttonText}
			</button>
		</div>
	)
}
