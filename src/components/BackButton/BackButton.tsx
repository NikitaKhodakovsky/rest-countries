import { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from '../Wrapper'
import styles from './BackButton.module.scss'

export function BackButton(props: HTMLAttributes<HTMLButtonElement>) {
	const navigate = useNavigate()

	return (
		<Wrapper<HTMLButtonElement> as='button' classNames={[styles.button]} onClick={() => navigate(-1)} {...props}>
			<FontAwesomeIcon icon={fas.faArrowLeft} className={styles.icon} />
			<span>Back</span>
		</Wrapper>
	)
}
