const http = require('http');
const express = require('express')
const socketIO = require('socket.io')

const app = express();
// Static middleware
app.use(express.static(`${__dirname}/../client/src`));

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
    console.log('someone connected')
    socket.emit('message', 'Hi You are connected successfully')

    socket.on('message', text => {
        io.emit('message', text)
    })
})

server.on('error', (err) => {
    console.log("Server error", err)
})

server.listen(8080, () => {
    console.log("Listening in port 8080...")
    console.log("rock-paper-scissors start..")
})