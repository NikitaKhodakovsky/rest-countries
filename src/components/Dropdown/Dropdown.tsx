import { useRef, useState } from 'react'

import { useEntranceExitAnimation } from '../../hooks/useEntranceExitAnimation'
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

	const toggle = () => setIsOpen(!isOpen)
	const close = () => setIsOpen(false)

	useOutsideAlerter(ref, close)

	const { animation, render } = useEntranceExitAnimation({ isOpen, entrance: styles.entrance, exit: styles.exit, exitDuration: 200 })

	const itemClickHandler = (v: string) => {
		onChange(v)
		close()
	}

	return (
		<Wrapper<HTMLDivElement> {...props}>
			<div className={styles.wrap} ref={ref}>
				<div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`} onClick={toggle}>
					<span>{value ?? title}</span>
					<div className={`icon chevron s-12 ${isOpen ? 'up' : 'down'} `}></div>
				</div>
				{render && (
					<ul className={`${styles.content} ${animation}`}>
						{options.map(value => (
							<li key={value} onClick={() => itemClickHandler(value)}>
								{value}
							</li>
						))}
					</ul>
				)}
			</div>
		</Wrapper>
	)
}
