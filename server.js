//Importing express
const express = require('express');
const path = require('path');

//Initializing the PORT
const PORT = 3001;

//Initializing the app variable
const app = express();

//sending a get request to call index.html 
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//This will display the message in the console
app.listen(PORT, () => {
    console.log(`Listening to the PORT http://localhost:${PORT}`)
})

