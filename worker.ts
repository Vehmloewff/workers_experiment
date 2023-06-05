import { fibonacci } from './fib.ts'
;(self as any).onmessage = ({ data }: any) => {
	;(self as any).postMessage(fibonacci(data))
}
