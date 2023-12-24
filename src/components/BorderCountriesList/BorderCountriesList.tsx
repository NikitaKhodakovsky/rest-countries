import { BorderCountriesListItem } from './BoderCountriesListItem'

import styles from './BorderCountriesList.module.scss'

export function BorderCountriesList({ codes }: { codes?: string[] }) {
	if (!codes) return null

	return (
		<div>
			<h2 className={styles.title}>Border Countries:</h2>
			<ul className={styles.list}>
				{codes.map(code => (
					<BorderCountriesListItem code={code} key={code} />
				))}
			</ul>
		</div>
	)
}
