const app = require("express")();

const PORT = process.env.PORT || 3000;

const http = requir('http');
const server = http.Server(app);

app.use(express.static('client'));