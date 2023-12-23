import { useState } from 'react'

import { DropdownItem } from './DropdownItem'
import { Wrapper } from '../Wrapper'

import styles from './Dropdown.module.scss'

interface DropdownProps {
	value?: string | null
	options: DropdownOption[]
	title?: string
	onChange: (v: string) => void
	className?: string
}

export interface DropdownOption {
	label?: string
	value: string
}

export function Dropdown({ title, options, value, onChange, ...props }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false)

	const handler = (v: string) => {
		onChange(v)
		setIsOpen(!isOpen)
	}

	const content = options.map(option => {
		return <DropdownItem option={option} key={option.value} onClick={() => handler(option.value)} />
	})

	const finishTitle = value ? options.find(o => o.value === value)?.label || value : title

	return (
		<Wrapper<HTMLDivElement> classNames={[styles.dropdownWrap]} {...props}>
			<div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
				<span>{finishTitle}</span>
				<div className={`icon chevron s-12 ${isOpen ? 'up' : 'down'} `}></div>
			</div>
			{isOpen && <ul className={styles.dropdownContent}>{content}</ul>}
		</Wrapper>
	)
}
