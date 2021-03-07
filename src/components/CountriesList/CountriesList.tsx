import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'

import { useAllCountriesQuery } from '../../queries/useAllCountriesQuery'
import { usePersistentState } from '../../hooks/usePersistentState'
import { CountriesListItem } from './CountriesListItem'
import { ErrorPage } from '../../pages/ErrorPage'
import { Loader } from '../Loader'

import styles from './CountriesList.module.scss'

export function CountriesList() {
	const [searchParams] = useSearchParams()

	const search = searchParams.get('search') || undefined
	const region = searchParams.get('region') || undefined

	const { isLoading, isError, data, error } = useAllCountriesQuery({ search, region })
	const [display, setDisplay] = usePersistentState('CountriesList.display', 12)

	if (isLoading) return <Loader />

	if (isError || !data || data.length <= 0) {
		const status = error?.status
		if (status === 404 || !data || data.length <= 0) {
			return <p className={styles.notFoundMessage}>No results</p>
		}

		return <ErrorPage />
	}

	const next = () => setDisplay(d => d + 12)
	const hasMore = display < data.length

	return (
		<div className={styles.wrap}>
			<InfiniteScroll className={styles.list} loader={<Loader />} dataLength={display} hasMore={hasMore} next={next}>
				{data?.slice(0, display).map(country => (
					<CountriesListItem key={country.cca3} country={country} />
				))}
			</InfiniteScroll>
		</div>
	)
}
