import { Link } from 'react-router-dom'
import { useFindCountryByCode } from '../../hooks/useFindCountryByCode'

export function BorderCountriesListItem({ code }: { code: string }) {
	const { isLoading, isError, data } = useFindCountryByCode(code)

	if (isLoading || isError || !data) {
		return null
	}

	return (
		<li>
			<Link to={`/country/${code}`}>{data.name.common}</Link>
		</li>
	)
}
