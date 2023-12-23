import { useQuery } from 'react-query'

import { API, FetchError } from '../api'
import { ICountry } from '../types'

export function useFindCountryByCode(code?: string | null) {
	return useQuery<ICountry, FetchError>(['country', { code }], () => API.findCountryByCode(code || ''), {
		retry: 2,
		staleTime: Infinity,
		cacheTime: Infinity,
		keepPreviousData: false
	})
}
