import { useQuery } from 'react-query'

import { fetcher, FetchError } from '../fetcher'
import { ICountry } from '../types'

export const countryDetailsQueryKeyBase = ['country', 'details']

export function countryByCodeQueryKeyFactory(code: string) {
	return [...countryDetailsQueryKeyBase, { code }]
}

export async function findCountryByCode(code: string, signal?: AbortSignal) {
	return fetcher<ICountry[]>(`alpha/${code}`, signal).then(res => res[0])
}

export function useCountryByCodeQuery(code: string) {
	return useQuery<ICountry, FetchError>({
		queryKey: countryByCodeQueryKeyFactory(code),
		queryFn: () => findCountryByCode(code),
		staleTime: Infinity,
		retry: false
	})
}
