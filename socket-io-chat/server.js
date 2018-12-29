var express = require("express");
var app = express();
var server = require("http").createServer(app);
var path = require("path");
var io = require("socket.io").listen(server);

var users = [],
		connections = [];

server.listen(process.env.PORT || 5000);

console.log('server runs')

app.get("", (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'))
})		

io.sockets.on("connection", (socket) => {
	connections.push(socket);
	console.log("connected. %s sockets connected", connections.length);

	// disconnect
	socket.on("disconnect", (data) => {
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log("disconnected. %s sockets connected", connections.length);
	})

	// send message
	socket.on('send message', (data) => {
		io.sockets.emit('new message', {msg: data, user: socket.username});
	})

	// new user 
	socket.on('new user', (data, callback) => {
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	})

	function updateUsernames() {
		io.sockets.emit('get users', users)
	}
})
