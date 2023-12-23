import { Link } from 'react-router-dom'

import { BackButton } from '../../components/BackButton'

import styles from './ErrorPage.module.scss'

export interface ErrorPageProps {
	title?: string
	subtitle?: string
}

export function ErrorPage({ title = 'OOPS!', subtitle = 'Something went wrong.' }: ErrorPageProps) {
	document.title = title
	return (
		<div className={styles.error}>
			<BackButton className={styles.backButton} />
			<div className={styles.title}>{title}</div>
			<div className={styles.subtitle}>{subtitle}</div>
			<Link to='/'>
				<button className={styles.homeButton}>Go home</button>
			</Link>
		</div>
	)
}
