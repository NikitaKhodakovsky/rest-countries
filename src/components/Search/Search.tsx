import { useSearchParams } from 'react-router-dom'
import { ChangeEventHandler } from 'react'

import styles from './Search.module.scss'

export function Search() {
	const [searchParams, setSearchParams] = useSearchParams()

	const search = searchParams.get('search') ?? ''

	const onChange: ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.target.value.trim()

		if (value === '') {
			searchParams.delete('search')
		} else {
			searchParams.set('search', value)
		}

		setSearchParams(searchParams)
	}

	return (
		<div className={styles.search}>
			<div className='icon search s-16'></div>
			<input type='text' placeholder='Search for a country...' value={search} onChange={onChange} />
		</div>
	)
}
