import { HTMLAttributes } from 'react'
import { Wrapper } from '../Wrapper'
import styles from './Loader.module.scss'

export function Loader({ style, className }: HTMLAttributes<HTMLDivElement>) {
	return (
		<Wrapper classNames={[className, styles.wrap]} style={style}>
			<div className={styles.loader} />
		</Wrapper>
	)
}
