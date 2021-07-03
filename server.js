// create an express app
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const crypto = require('crypto');


// use the express-static middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Hey There !! Welcome to the server")
})


app.listen(3000, () => console.log("The serving is running"));