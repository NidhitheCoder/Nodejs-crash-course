const http = require('http');
const express = require('express')
const socketIO = require('socket.io')

const app = express();
// Static middleware
app.use(express.static(`${__dirname}/../client/src`));

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
    socket.emit('message', 'Hi You are connected successfully')
})

server.on('error', (err) => {
    console.log("Server error", err)
})

server.listen(8080, () => {
    console.log("Listening in port 8080...")
    console.log("rock-paper-scissors start..")
})