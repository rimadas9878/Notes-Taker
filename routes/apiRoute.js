const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

// const database = require('../db/db.json');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

apiRoute.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for creating a new note
apiRoute.post('/', (req, res) => {
    console.log(req.body);

    //Adding data as per the content in database
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

  
//DELETE for deleting the created post
apiRoute.delete('/:id', function(req, res){

  //reading data from the database
  let db = JSON.parse(fs.readFileSync('db/db.json'))

  // deleting the note using id
  let deleteNote = db.filter(record => record.id !== req.params.id);
  console.log('Deleting note')

  // Adding note to db.json
  fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
  res.json(deleteNote);
})


module.exports = apiRoute;