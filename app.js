const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client/html'));

server.listen(PORT, function() {
    console.log('Server running');
})

