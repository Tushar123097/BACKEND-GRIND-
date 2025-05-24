//step 1 create a folder
//step 2 move into that folder
//step 3 npm init -y
//step 4 open folder usind vscode
//step 5 npm i express
//step 6 create server.js

//Server Instantiate
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//specially parse JSON data in body
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server is Started on port 3000");
});

//Routes
app.get('/', (req, res) => {
    res.send("Hello World it me tushar machana ka hai ab developer brand");
});

//postman se send karna hai
app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car added finally");
});

const mongoose = require('mongoose');

//connect to the database
//isko linkha he padega chalane ke liye
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
    //Promise concept ussed kar diya beta 
})
.then(() => {
    console.log("Connected to Succesfull");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});