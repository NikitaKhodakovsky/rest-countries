import { useRef, useState } from 'react'

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter'

import { Wrapper } from '../Wrapper'

import styles from './Dropdown.module.scss'

interface DropdownProps {
	value?: string | null
	options: string[]
	title?: string
	onChange: (v: string) => void
	className?: string
}

export function Dropdown({ title, options, value, onChange, ...props }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef(null)

	useOutsideAlerter(ref, () => setIsOpen(false))

	const handler = (v: string) => {
		onChange(v)
		setIsOpen(!isOpen)
	}

	return (
		<Wrapper<HTMLDivElement> {...props}>
			<div className={styles.wrap} ref={ref}>
				<div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
					<span>{value ?? title}</span>
					<div className={`icon chevron s-12 ${isOpen ? 'up' : 'down'} `}></div>
				</div>
				<ul className={`${styles.content} ${isOpen ? styles.open : styles.hidden}`}>
					{options.map(value => (
						<li onClick={() => handler(value)}>{value}</li>
					))}
				</ul>
			</div>
		</Wrapper>
	)
}
