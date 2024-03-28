const express = require('express')
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(4040, () => {
    console.log(`server is running on http://localhost:4040`)
})