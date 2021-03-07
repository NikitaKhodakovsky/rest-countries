import { Link } from 'react-router-dom'

import { useCountryByCodeQuery } from '../../queries/useCountryByCodeQuery'

export function BorderCountriesListItem({ code }: { code: string }) {
	const { isLoading, isError, data } = useCountryByCodeQuery(code)

	if (isLoading || isError || !data) return null

	return (
		<li>
			<Link to={`/country/${code}`}>{data.name.common}</Link>
		</li>
	)
}
