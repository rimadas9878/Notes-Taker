//Importing express
const express = require('express');
const path = require('path');
const api = require('./routes/index');

//Initializing the app variable
const app = express();

//Initializing the PORT
const PORT = 3001;

app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api)
//sending a get request to call index.html 
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//sending a get request to call notes.html
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


//This will display the message in the console
app.listen(PORT, () => {
    console.log(`Listening to the PORT http://localhost:${PORT}`)
})

