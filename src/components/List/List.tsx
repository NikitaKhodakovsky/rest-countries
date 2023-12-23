import { ReactNode } from 'react'
import { Wrapper } from '../Wrapper'
import { ListItem } from './ListItem'

import styles from './List.module.scss'

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
	children?: ReactNode
	value?: string[]
}

export function List({ children, value, ...props }: ListProps) {
	let content = children

	if (value) {
		content = value.map((v) => <ListItem value={v} key={v} />)
	}

	return (
		<Wrapper<HTMLUListElement> as='ul' classNames={[styles.list]} {...props}>
			{content}
		</Wrapper>
	)
}
