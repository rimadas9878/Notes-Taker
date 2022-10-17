const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// const database = require('../db/db.json');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

apiRoute.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for a new UX/UI tip
apiRoute.post('/', (req, res) => {
    console.log(req.body);
  
    const {title, text} = req.body;
  
    if (req.body) {
      const note = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(note, './db/db.json');
      res.json(`Notes added successfully 🚀`);
    } else {
      res.error('Error in adding notes');
    }
  });

  



module.exports = apiRoute;