const addTwo = (a, b) => a +b

const cachify = oldFn => {
	const cache = {}
	const newFn = (...args) => {
		console.log('current cache', cache)

		const k = JSON.stringify(args)
		console.log('args', k)

		if(cache.hasOwnProperty(k)){
			console.log('cache hit!!!')
			return cache[k]
		}
		else{
			console.log('cache miss')
			const ret = oldFn(...args)
			cache[k] = ret
			return ret
		}
	}
	return newFn
}

const f = cachify(addTwo)
console.log(f(4, 4)) //cache m
console.log(f(4, 4))
console.log(f(4, 5))