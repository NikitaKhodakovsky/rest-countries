import { useSearchParams } from 'react-router-dom'
import styles from './RegionFilter.module.scss'
import { Dropdown } from '../Dropdown'

const options = [
	{ value: 'All' },
	{ value: 'Africa' },
	{ label: 'America', value: 'Americas' },
	{ value: 'Antarctic' },
	{ value: 'Asia' },
	{ value: 'Europe' },
	{ value: 'Oceania' }
]

export function RegionFilter() {
	const [searchParams, setSearchParams] = useSearchParams()
	const value = searchParams.get('region')

	const onChange = (v: string) => {
		searchParams.set('region', v)
		setSearchParams(searchParams)
	}

	return (
		<Dropdown
			title='Filter by Region'
			value={value}
			options={options}
			onChange={onChange}
			className={styles.regionFilter}
		/>
	)
}
