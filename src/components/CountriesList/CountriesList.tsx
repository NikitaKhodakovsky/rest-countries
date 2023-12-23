import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

import { useFindManyCountries } from '../../queries/useFindManyCountries'
import { CountriesListItem } from './CountriesListItem'
import { ErrorPage } from '../../pages/ErrorPage'
import { Loader } from '../Loader'

import styles from './CountriesList.module.scss'

export interface CountriesListProps {
	search?: string
	region?: string
}

export function CountriesList({ search, region }: CountriesListProps) {
	const { isLoading, isError, data, error } = useFindManyCountries({ search, region })
	const [display, setDisplay] = useState(12)

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data || data.length <= 0) {
		const status = error?.status
		if (status === 404 || !data || data.length <= 0) {
			return <p className={styles.notFoundMessage}>No results</p>
		}

		return <ErrorPage />
	}

	const next = () => setDisplay(d => d + 12)
	const nextPage = display <= data.length

	return (
		<div className={styles.wrap}>
			<InfiniteScroll className={styles.list} loader={<Loader />} dataLength={display} hasMore={nextPage} next={next}>
				{data?.slice(0, display).map(country => (
					<CountriesListItem key={country.cca3} country={country} />
				))}
			</InfiniteScroll>
		</div>
	)
}
