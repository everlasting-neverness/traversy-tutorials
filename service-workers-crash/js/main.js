if ('serviceWorker' in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
  		.register('../sw_cached_site.js')
  		.then(reg => console.log(reg))
  		.catch(err => console.log(err))		
	})
}