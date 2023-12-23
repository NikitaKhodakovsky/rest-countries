import { useSearchParams } from 'react-router-dom'

import { useTitle } from '../../hooks/useTitle'

import { CountriesList } from '../../components/CountriesList'
import { RegionFilter } from '../../components/RegionFilter'
import { Search } from '../../components/Search'

import styles from './HomePage.module.scss'

export function HomePage() {
	const [searchParams] = useSearchParams()

	const search = searchParams.get('search') || undefined
	const region = searchParams.get('region') || undefined

	useTitle('Where is the world?')

	return (
		<main className={styles.home}>
			<div className={styles.filters}>
				<Search />
				<RegionFilter />
			</div>
			<CountriesList search={search} region={region} />
		</main>
	)
}
