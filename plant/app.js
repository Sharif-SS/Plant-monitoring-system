//node modules
const express = require('express');
const path = require("path"); //so that it runs of any directory
const app = express();
const mongoDB = require('./utils/db.js');

const plantControl = require('./controller/plantController')


async function loadDBClient() {
    await mongoDB.connectToDB();
  };  
  loadDBClient();

  //display the defacto index.html
  app.use(express.static(path.join(__dirname + '/views')));

  //To be accessed by list.js in views for ajax
  app.get('/reading-all', plantControl.list_all);
  

//Listening at localhost: 3000
const server = app.listen(3000, () => {
  console.log('Server listening at http://localhost:%d', 3000);
 })

