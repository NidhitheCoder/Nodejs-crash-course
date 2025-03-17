const http = require('http');
const express = require('express')

const app = express();
// Static middleware
app.use(express.static(`${__dirname}/../client`));

const server = http.createServer(app)

server.on('error', (err) => {
    console.log("Server error", err)
})

server.listen(8080, () => {
    console.log("Listening in port 8080...")
    console.log("rock-paper-scissors start..")
})