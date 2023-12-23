import { useNavigate } from 'react-router-dom'
import { HTMLAttributes } from 'react'

import { Wrapper } from '../Wrapper'

import styles from './BackButton.module.scss'

export function BackButton(props: HTMLAttributes<HTMLButtonElement>) {
	const navigate = useNavigate()

	return (
		<Wrapper<HTMLButtonElement> as='button' classNames={[styles.button]} onClick={() => navigate(-1)} {...props}>
			<div className={`icon arrow-left ${styles.icon}`}></div>
			<span>Back</span>
		</Wrapper>
	)
}
