const publicVapidKey = "BKP20CJQzz7dLeo8PcZWwoRenmmAEBUa1-Zrp2ucyRVGGKfgy8VsrHkgoZDg_-jChOUyY2_8bb1LKhfYJS6MD-k";

if (navigator.serviceWorker) {
	send().catch(err => console.error(err));
}

// register SW, register Push, send Push
async function send() {
	console.log('registering SW');
	const register = await navigator.serviceWorker.register('./worker.js', {
		// scope defines urls to which worker's gonna apply
		scope: '/'
	});
	console.log('registered SW');

	console.log('registering Push');
	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
	});
	console.log('registered Push');

	console.log('sending Push');
	await fetch('/subscribe', {
		method: "POST",
		body: JSON.stringify(subscription),
		headers: {
			"content-type": "application/json"
		}
	})
	console.log('sended Push');
}

// publicVapidKey needs to be wrapped in Uint8Array
// (taken from official docs of Google)
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}