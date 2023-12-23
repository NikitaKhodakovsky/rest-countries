import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { useHideOnScroll } from '../../hooks/useHideOnScroll'
import { ThemeToggle } from '../ThemeToggle'
import { Wrapper } from '../Wrapper'
import styles from './Header.module.scss'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
	fixed?: boolean
}

export function Header({ fixed = false, ...props }: HeaderProps) {
	const hide = useHideOnScroll(15)

	const classNames = [styles.headerWrap, fixed ? styles.fixed : null, hide ? styles.hide : styles.show]

	return (
		<Wrapper<HTMLDivElement> classNames={classNames} as='div' {...props}>
			<header className={styles.header}>
				<Link to='/'>
					<h3 className={styles.title} onClick={() => window.scrollTo(0, 0)}>
						Where is the world?
					</h3>
				</Link>
				<ThemeToggle />
			</header>
		</Wrapper>
	)
}
