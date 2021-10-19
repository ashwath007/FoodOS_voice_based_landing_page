const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})


app.get("/case", (req, res) => {
    res.sendFile(path.join(__dirname, './public/case.html'));
})

app.listen(port, () => {
    console.log("Server Running ...");
})