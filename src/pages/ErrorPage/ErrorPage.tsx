import { BackButton } from '../../components/BackButton'

import styles from './ErrorPage.module.scss'

export interface ErrorPageProps {
	title?: string
	subtitle?: string
	onClick?: () => any
	buttonText?: string
}

export function ErrorPage({ title = 'OOPS!', subtitle = 'Something went wrong.', buttonText, onClick }: ErrorPageProps) {
	document.title = title
	return (
		<div className={styles.error}>
			<BackButton className={styles.backButton} />
			<div className={styles.title}>{title}</div>
			<div className={styles.subtitle}>{subtitle}</div>
			<button className={styles.homeButton} onClick={onClick}>
				{buttonText}
			</button>
		</div>
	)
}
