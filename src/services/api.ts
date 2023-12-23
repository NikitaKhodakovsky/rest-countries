import { ICountry } from '../interfaces'

// export class API {
// 	private static base = 'https://restcountries.com/v3.1'

// 	static async findCountryByName(name: string): Promise<ICountry[]> {
// 		return await axios.get(`${API.base}/name/${name}`).then((res) => res.data)
// 	}

// 	static async findAllCountries(): Promise<ICountry[]> {
// 		return await axios.get(`${API.base}/all`).then((res) => res.data)
// 	}

// 	static async findCountryByCode(code: string): Promise<ICountry> {
// 		return await axios.get(`${API.base}/alpha/${code}`).then((res) => res.data[0])
// 	}
// }

export class API {
	private static base = 'https://restcountries.com/v3.1'

	static async findCountryByName(name: string): Promise<ICountry[]> {
		return await get<ICountry[]>(`${API.base}/name/${name}`)
	}

	static async findAllCountries(): Promise<ICountry[]> {
		return await get<ICountry[]>(`${API.base}/all`) //await axios.get(`${API.base}/all`).then((res) => res.data)
	}

	static async findCountryByCode(code: string): Promise<ICountry> {
		return await get<ICountry[]>(`${API.base}/all`).then((res) => res[0]) //return await axios.get(`${API.base}/alpha/${code}`).then((res) => res.data[0])
	}
}

function get<T>(url: string): Promise<T> {
	return fetch(url).then((response) => {
		const { ok, statusText, status } = response
		if (!ok) {
			throw new FetchError(statusText, status)
		}
		return response.json() as Promise<T>
	})
}

export class FetchError extends Error {
	status: number

	constructor(message: string, status: number) {
		super(message)
		this.status = status
	}
}
