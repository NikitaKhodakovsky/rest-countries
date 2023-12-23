import { useQuery, useQueryClient } from 'react-query'

import { API, FetchError } from '../api'
import { ICountry } from '../types'

interface FindManyCountriesProps {
	search?: string | null
	region?: string | null
}

const options = { staleTime: Infinity, keepPreviousData: true, cacheTime: Infinity, retry: false }

export function useFindManyCountries({ search, region }: FindManyCountriesProps = {}) {
	const queryClient = useQueryClient()
	const callback = search ? () => API.findCountryByName(search) : API.findAllCountries

	return useQuery<ICountry[], FetchError>(
		['country', 'allCountries', { search, region }],
		async () => {
			const data = await callback()

			data.forEach(country => {
				queryClient.setQueryData(['country', { code: country.cca3 }], country)
			})

			return region && region !== 'All' ? data.filter(c => c.region === region) : data
		},
		options
	)
}
