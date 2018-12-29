console.log('SW loaded');

self.addEventListener("push", e => {
	const data = e.data.json();
	console.log('push received');
	self.registration.showNotification(data.title, {
		body: "Notified by me",
		icon: "./logo.jpg"
	})
})