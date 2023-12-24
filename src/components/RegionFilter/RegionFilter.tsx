import { useSearchParams } from 'react-router-dom'

import { Region } from '../../queries/useAllCountriesQuery'

import { Dropdown } from '../Dropdown'

import styles from './RegionFilter.module.scss'

export function RegionFilter() {
	const [searchParams, setSearchParams] = useSearchParams()
	const value = searchParams.get('region')

	const onChange = (region: string) => {
		searchParams.set('region', region)
		setSearchParams(searchParams)
	}

	return (
		<Dropdown
			title='Filter by Region'
			value={value}
			options={Object.values(Region)}
			onChange={onChange}
			className={styles.regionFilter}
		/>
	)
}
