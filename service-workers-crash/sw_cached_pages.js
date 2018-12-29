const cacheName = 'v1';

// 1 way to cache every single page. Not convenient when there're a lot of pages
const cacheAssets = [
	'index.html',
	'about.html',
	'css/style.css',
	'/js/main.js'
];

self.addEventListener("install", e => {
	console.log(e);
	// tells the browser to wait until promise will be finished
	e.waitUntil(
		// cacheStorage API
		caches
			// open our cacheStorage in the browser 
			.open(cacheName)
			// put in the cacheStorages our assets we need to cache
			.then(cache => {
				console.log(cache);
				cache.addAll(cacheAssets)
			})
			// forces the waiting service worker to become the active service worker.
			.then(() => self.skipWaiting())
	)
})

self.addEventListener("activate", e => {
	// here we activate cache we have in the storage
	// so when we bring in new v (version) of files, wwe need to clean cache to put there
	// a new version
	console.log(e)
	e.waitUntil(
		// iterate through the keys of cache and if there are any keys, that doesn't match 
		// our cacheName (new version), we'll delete them
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
	// trying to get information from the server, if fail - catch and get data from cacheStorage
	e.respondWith(
		fetch(e.request).catch(() => {
			console.log('looking in cache...')
			caches.match(e.request)
		})
	)
})