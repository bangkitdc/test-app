const express = require("express");
const app = express();
const path  = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.listen(3000);

// const app = require("express")();

// const PORT = process.env.PORT || 3000;

// app.get("", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(PORT, () => {
//   console.log(`App up at port ${PORT}`);
// });