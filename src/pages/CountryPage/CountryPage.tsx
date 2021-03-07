import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useCountryByCodeQuery } from '../../queries/useCountryByCodeQuery'
import { BorderCountriesList } from '../../components/BorderCountriesList'
import { numberWithCommas } from '../../utils/numberWithCommas'
import { BackButton } from '../../components/BackButton'
import { List, ListItem } from '../../components/List'
import { Loader } from '../../components/Loader'
import { useTitle } from '../../hooks/useTitle'
import { NotFoundPage } from '../NotFoundPage'

import styles from './CountryPage.module.scss'

export function CountryPage() {
	const { code } = useParams()

	const { isLoading, isError, data } = useCountryByCodeQuery(code ?? '')

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
		}
	}, [])

	useEffect(() => window.scrollTo(0, 0), [code])

	useTitle(data?.name?.common)

	return (
		<div className={styles.country}>
			<BackButton className={styles.button} />
			{isLoading && <Loader />}
			{isError && <NotFoundPage subtitle='Country not found.' />}
			{data && (
				<section className={styles.wrap}>
					<img className={styles.flag} src={data.flags.svg} alt={data.name.common} />
					<div className={styles.content}>
						<h1 className={styles.title}>{data.name.common}</h1>
						<div className={styles.info}>
							<List className={styles.list}>
								<ListItem name='Native Name:'>{Object.values(data.name.nativeName ?? {})[0]?.official}</ListItem>
								<ListItem name='Population:'>{numberWithCommas(data.population)}</ListItem>
								<ListItem name='Region:'>{data.region}</ListItem>
								<ListItem name='Sub Region:'>{data.subregion}</ListItem>
								<ListItem name='Capital:'>{data.capital}</ListItem>
							</List>
							<List className={styles.list}>
								<ListItem name='Top Level Domain:'>{data.tld}</ListItem>
								<ListItem name='Currencies:'>{Object.values(data.currencies ?? {}).map(c => c?.name)}</ListItem>
								<ListItem name='Languages:'>{Object.values(data.languages ?? {})}</ListItem>
							</List>
						</div>
						<BorderCountriesList codes={data.borders} />
					</div>
				</section>
			)}
		</div>
	)
}
