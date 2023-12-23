import { Helmet } from 'react-helmet'
import { useSearchParams } from 'react-router-dom'
import { CountriesList } from '../../components/CountriesList'
import { RegionFilter } from '../../components/RegionFilter'
import { Search } from '../../components/Search'
//import { CountriesList, RegionFilter, Search } from '../../components'
import styles from './HomePage.module.scss'

export function HomePage() {
	const [searchParams] = useSearchParams()

	const search = searchParams.get('search') || undefined
	const region = searchParams.get('region') || undefined

	return (
		<main className={styles.home}>
			<Helmet>
				<title>Where is the world?</title>
				<meta name='description' content={'Page with info about all countries in the world'} />
			</Helmet>
			<div className={styles.filters}>
				<Search />
				<RegionFilter />
			</div>
			<CountriesList search={search} region={region} />
		</main>
	)
}
