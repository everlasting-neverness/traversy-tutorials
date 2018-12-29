const cacheName = 'v2';

// 2 approach - cache the whole site (all assets)

self.addEventListener("install", e => {
	console.log(e);
	
})

self.addEventListener("activate", e => {
	console.log(e)
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						return caches.delete(cache)
					}
				})
			)
		})
	)
})

self.addEventListener("fetch", e => {
	console.log('fetching...');
	e.respondWith(
		fetch(e.request)
			.then(res => {
				// if we get information from the server, now we will cache it (make clone/copy)
				const resClone = res.clone()
				caches
					.open(cacheName)
					.then(cache => {
						// Add response to cache
						cache.put(e.request, resClone);
					})
				return res;
			// now if fetch server fails we will try to fetch it from cache	
			}).catch(err => caches.match(e.request).then(res => response))
			// it will only cache that pages, where we were, so if we didn't visit about.html, then it won't be in cache
	)
})