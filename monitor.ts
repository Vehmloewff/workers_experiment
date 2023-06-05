setInterval(async () => {
	const startTime = Date.now()
	await fetch('http://localhost:9000').then(async res => {
		if (!res.ok) throw new Error(`Bad response: ${await res.text()}`)

		const text = await res.text()
		console.log(`${text.split('\n').pop()} in ${Date.now() - startTime}ms`)
	})
}, 1000)
