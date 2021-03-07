export const base = 'https://restcountries.com/v3.1/'

export class FetchError extends Error {
	status: number

	constructor(message: string, status: number) {
		super(message)
		this.status = status
	}
}

export async function fetcher<TData>(path: string, signal?: AbortSignal): Promise<TData> {
	const url = new URL(path, base).href

	const res = await fetch(url, { signal })

	if (!res.ok) {
		throw new FetchError(res.statusText, res.status)
	}

	return res.json() as Promise<TData>
}
