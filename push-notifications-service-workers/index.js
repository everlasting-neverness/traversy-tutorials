const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client")))

app.use(bodyParser.json());

// vapid keys are needed to identify who is sending notifications
// generate by command in terminal ./node_modules/.bin/web-push generate-vapid-keys

const publicVapidKey = "BKP20CJQzz7dLeo8PcZWwoRenmmAEBUa1-Zrp2ucyRVGGKfgy8VsrHkgoZDg_-jChOUyY2_8bb1LKhfYJS6MD-k";
const privateVapidKey = "-vAXAMnkQPJzK-O5apQKmmrIOBd5dcC2y5n4Le73Cfw";

webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
	const subscription = req.body;

	// send status 201 back to let know that resource was created successfully
	res.status(201).json({})

	const payload = JSON.stringify({ title: 'push test' });

	webpush.sendNotification(subscription, payload).catch(err => console.error(err))

})

const port = 5000;

app.listen(port, () => {
	console.log('rinning on 5000')
})