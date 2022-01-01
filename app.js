// const PORT = 3000;
// const express = require("express");
// const app = express();

// const http = require('http');
// const server = http.Server(app);

// app.use(express.static('client'));

// server.listen(PORT, function() {
//     console.log('Server running');
// })

const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});