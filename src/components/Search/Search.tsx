import { ChangeEventHandler, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './Search.module.scss'

export function Search() {
	const [searchParams, setSearchParams] = useSearchParams()

	const search = searchParams.get('search') || undefined

	const [inputValue, setInputValue] = useState(search || '')

	//type text to input, then click on logo. Prev value leave in input, but ?search not exist
	useEffect(() => setInputValue(search || ''), [search])

	const searchParamsHandler = (key: string, value: string) => {
		searchParams.delete('page')
		value = value.trim()
		if (value === '') {
			searchParams.delete(key)
		} else {
			searchParams.set(key, value)
		}
		setSearchParams(searchParams)
	}

	const onChange: ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.target.value
		setInputValue(value)
		searchParamsHandler('search', value)
	}

	return (
		<div className={styles.search}>
			<div className='icon search s-16'></div>
			<input type='text' placeholder='Search for a country...' value={inputValue} onChange={onChange} />
		</div>
	)
}
