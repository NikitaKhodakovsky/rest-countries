export function numberWithCommas(x?: string | number | null) {
	return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''
}
