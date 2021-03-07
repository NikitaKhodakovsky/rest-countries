import { Link } from 'react-router-dom'
import { HTMLAttributes } from 'react'

import { useHideOnScroll } from '../../hooks/useHideOnScroll'

import { ThemeToggle } from '../ThemeToggle'
import { Wrapper } from '../Wrapper'

import styles from './Header.module.scss'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
	fixed?: boolean
}

export function Header({ fixed = false, ...props }: HeaderProps) {
	const isHidden = useHideOnScroll(20)

	const classNames = [styles.header, fixed ? styles.fixed : null, isHidden ? styles.hidden : null]

	return (
		<Wrapper<HTMLDivElement> classNames={classNames} as='div' {...props}>
			<header className={styles.content}>
				<Link to='/'>
					<h3 className={styles.title} onClick={() => window.scrollTo(0, 0)}>
						Where in the world?
					</h3>
				</Link>
				<ThemeToggle />
			</header>
		</Wrapper>
	)
}
