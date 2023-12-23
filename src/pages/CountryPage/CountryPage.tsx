import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

import { useFindCountryByCode } from '../../hooks/useFindCountryByCode'
import { numberWithCommas } from '../../utils/numberWithCommas'

import { BorderCountriesList } from '../../components/BorderCountriesList'
import { BackButton } from '../../components/BackButton'
import { List, ListItem } from '../../components/List'
import { Loader } from '../../components/Loader'
import { NotFoundPage } from '../NotFoundPage'
import { ErrorPage } from '../ErrorPage'

import styles from './CountryPage.module.scss'

export function CountryPage() {
	const { code } = useParams<'code'>()

	//if we load next country, we have scroll pos. from prev. country
	useEffect(() => window.scrollTo(0, 0), [code])

	const { isLoading, isError, data, error } = useFindCountryByCode(code)

	if (isLoading) {
		return <Loader />
	}

	if (isError) {
		const status = error?.status
		if (status && status < 500 && status >= 400) {
			return <NotFoundPage />
		}

		return <ErrorPage />
	}

	if (!data) {
		return <NotFoundPage />
	}

	const { name, flags, population, region, subregion, capital, tld, languages, currencies, borders } = data

	return (
		<div className={styles.country}>
			<Helmet>
				<title>{name.common}</title>
				<meta name='description' content={[name, population, region, subregion].filter(i => i).join(' ')} />
			</Helmet>
			<BackButton className={styles.btn} />
			<section className={styles.wrap}>
				<img className={styles.flag} src={flags.svg} alt={name.common} />
				<div className={styles.content}>
					<h1 className={styles.title}>{name.common}</h1>
					<div className={styles.info}>
						<List className={styles.list}>
							<ListItem name='Native Name:'>{Object.values(name.nativeName || {})[0]?.official}</ListItem>
							<ListItem name='Population:'>{numberWithCommas(population)}</ListItem>
							<ListItem name='Region:'>{region}</ListItem>
							<ListItem name='Sub Region:'>{subregion}</ListItem>
							<ListItem name='Capital:'>{capital}</ListItem>
						</List>
						<List className={styles.list}>
							<ListItem name='Top Level Domain:'>{tld}</ListItem>
							<ListItem name='Currencies:'>{Object.values(currencies || {}).map(c => c?.name)}</ListItem>
							<ListItem name='Languages:'>{Object.values(languages || {})}</ListItem>
						</List>
					</div>
					<BorderCountriesList codes={borders} />
				</div>
			</section>
		</div>
	)
}
