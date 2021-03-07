import { useTitle } from '../../hooks/useTitle'

import { CountriesList } from '../../components/CountriesList'
import { RegionFilter } from '../../components/RegionFilter'
import { Search } from '../../components/Search'

import styles from './HomePage.module.scss'

export function HomePage() {
	useTitle('Where in the world?')

	return (
		<main className={styles.home}>
			<div className={styles.filters}>
				<Search />
				<RegionFilter />
			</div>
			<CountriesList />
		</main>
	)
}
