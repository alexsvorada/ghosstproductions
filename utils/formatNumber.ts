interface Suffix {
	value: number
	symbol: string
}

/**
 * Formats a number by adding K, M, B, or T suffix and rounding to 2 decimal places
 * @param number The number to format
 * @returns A string representation of the number with appropriate suffix
 * @example
 * formatNumber(1234) // "1.23K"
 * formatNumber(1234567) // "1.23M"
 */
export function formatNumber(number: number): string {
	const suffixes: Suffix[] = [
		{ value: 1e12, symbol: 'T' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e3, symbol: 'K' },
	]

	const suffix: Suffix | undefined = suffixes.find((suffix) => number >= suffix.value)

	if (!suffix) {
		return (Math.round(number * 100) / 100).toFixed(0)
	}

	const scaledValue: number = number / suffix.value
	const roundedValue: number = Math.round(scaledValue * 100) / 100
	return `${roundedValue.toFixed(2).replace(/\.?0+$/, '')}${suffix.symbol}`
}
