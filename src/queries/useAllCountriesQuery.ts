import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'

import { countryByCodeQueryKeyFactory } from './useCountryByCodeQuery'
import { fetcher, FetchError } from '../fetcher'
import { ICountry } from '../types'

export enum Region {
	All = 'All',
	Africa = 'Africa',
	Americas = 'Americas',
	Antarctic = 'Antarctic',
	Asia = 'Asia',
	Europe = 'Europe',
	Oceania = 'Oceania'
}

export interface FindAllCountriesParams {
	search?: string | null
	region?: string | null
}

/* This REST API do not support pagination */
export async function findAllCountries({ search, region }: FindAllCountriesParams, queryClient?: QueryClient, signal?: AbortSignal) {
	const path = search ? `name/${search.toLowerCase()}` : 'all'

	const countries = await fetcher<ICountry[]>(path, signal)

	if (queryClient) {
		countries.forEach(c => queryClient.setQueryData<ICountry>(countryByCodeQueryKeyFactory(c.cca3), c))
	}

	if (region) {
		const normalizedRegion = region.toLowerCase()

		if (normalizedRegion === Region.All.toLowerCase()) return countries

		return countries.filter(c => c.region.toLowerCase() === normalizedRegion)
	}

	return countries
}

const allCountriesQueryKeyBase = ['country', 'list']

export function allCountriesQueryKeyFactory({ search, region }: FindAllCountriesParams) {
	const normalizedRegion = (region && region.toLowerCase()) ?? null
	const normalizedSearch = (search && search.toLowerCase()) ?? null

	return [...allCountriesQueryKeyBase, { search: normalizedSearch, region: normalizedRegion }]
}

export function useAllCountriesQuery(params: FindAllCountriesParams = {}) {
	const client = useQueryClient()

	return useQuery<ICountry[], FetchError>({
		queryKey: allCountriesQueryKeyFactory(params),
		queryFn: ({ signal }) => findAllCountries(params, client, signal),
		staleTime: Infinity,
		retry: false
	})
}
