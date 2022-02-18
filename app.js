const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, auth_token');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT');
    next()
})

app.get('/change', (req, res) => {
    let randomNumbers = [];
    for (var i = 0; i < 10; i++) {
        let x = Math.floor(Math.random()*5);
        console.log(x)
        randomNumbers.push(x);
    }
    res.json({randomNumbers})
})
// app.use('/api', userRoutes)

// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);

try {
    app.listen(5000, function(err){
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", 5000);
    })
} catch (error) {
    console.log(error)
}