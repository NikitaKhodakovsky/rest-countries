import { Link } from 'react-router-dom'

import { numberWithCommas } from '../../utils/numberWithCommas'
import { List, ListItem } from '../List'
import { ICountry } from '../../types'

import styles from './CountriesListItem.module.scss'

interface CountriesListItemProps {
	country: ICountry
}

export function CountriesListItem({ country }: CountriesListItemProps) {
	const { name, population, region, capital, flags, cca3 } = country
	return (
		<Link to={`country/${cca3}`}>
			<div className={styles.listItem}>
				<img className={styles.image} src={flags.png} alt={name.common} />
				<div className={styles.body}>
					<h3 className={styles.title}>{name.common}</h3>
					<List className={styles.list}>
						<ListItem name='Population:'>{numberWithCommas(population)}</ListItem>
						<ListItem name='Region:'>{region}</ListItem>
						<ListItem name='Capital:'>{capital}</ListItem>
					</List>
				</div>
			</div>
		</Link>
	)
}
