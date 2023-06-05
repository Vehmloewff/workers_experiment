export function fibonacci(n: number): number[] {
	if (n <= 0) {
		return []
	} else if (n === 1) {
		return [0]
	} else if (n === 2) {
		return [0, 1]
	} else {
		const fib = [0, 1]
		for (let i = 2; i < n; i++) {
			fib.push(fib[i - 1] + fib[i - 2])
		}
		return fib
	}
}
