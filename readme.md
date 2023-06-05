# Worker Benchmarks

The purpose of this tool is to determine the cost of spawning large amounts of
workers in the Deno runtime.

There are two parts. The first is a script that spawns 500 workers that shuffle
every 65ms. Each worker computes the first 10,000 numbers of the fibonacci
sequence every 5ms. The server also exposes a server that response with the
result of running the same calculation on the main thread.

```shell
deno run -A --unstable main.ts
```

The second part is a script that hits the afore mentioned server every second.
Response times are monitored.

```shell
deno run -A monitor.ts
```
