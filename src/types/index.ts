export interface ICountry {
	name: { common: string; nativeName?: object; official: string }
	capital?: string[]
	population?: number
	languages?: object
	flags: { svg: string; png: string }
	borders?: string[]
	currencies?: object
	region: string
	subregion?: string
	tld?: string[]
	cca2: string
	cca3: string
}
