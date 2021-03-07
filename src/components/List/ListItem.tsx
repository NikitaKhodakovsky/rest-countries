import { HTMLAttributes } from 'react'
import { Wrapper } from '../Wrapper'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
	name?: string
	value?: string | string[]
	children?: string | string[]
}

export function ListItem({ name, value, children, ...props }: ListItemProps) {
	let content = value ? value : children

	if (Array.isArray(content)) {
		content = content.join(', ')
	}

	return content ? (
		<Wrapper<HTMLLIElement> as='li' {...props}>
			{name && <strong>{name} </strong>}
			{content}
		</Wrapper>
	) : null
}
