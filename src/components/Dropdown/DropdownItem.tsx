import { HTMLAttributes } from 'react'
import { DropdownOption } from './Dropdown'

interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
	option: DropdownOption
}

export function DropdownItem({ option, onClick }: DropdownItemProps) {
	const { value, label } = option
	return (
		<li onClick={onClick}>
			{label ? label : value}
		</li>
	)
}
