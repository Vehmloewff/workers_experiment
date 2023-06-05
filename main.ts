import { fibonacci } from './fib.ts'

const workers: VoidFunction[] = []

setInterval(() => {
	workers.push(addWorker())

	if (workers.length > 500) workers.shift()!()

	console.log(`Just added another worker. Total: ${workers.length}`)
}, 65)

function addWorker() {
	const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })

	// let startTime: number | null = null

	// worker.onmessage = () => {}

	const interval = setInterval(() => {
		// startTime = Date.now()
		worker.postMessage(10000)
	}, 5)

	return () => {
		worker.terminate()
		clearInterval(interval)
	}
}

Deno.serve(
	() => {
		return new Response(fibonacci(1000).join('\n'))
	},
	{ port: 9000 }
)
