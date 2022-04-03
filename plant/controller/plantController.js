const Crash = require('../model/plantDB');

/**
 * A function that lists all crashes with all information that is
 * in MongoDB. 
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.list_all = async (req, res) => {
      
      let collection = Crash

      collection.find().lean().exec(function (err, crashes) {
        if (err) throw err;
        if(crashes.length == 0){
            console.log('Database is empty');
        }

        console.log(crashes.length+" crash(s) sent.")
        res.send(crashes);
       });

};

/**
 * A function that  
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.moistureReading = async (req, res) => {

    let x = Math.floor((Math.random() * 2));
    console.log(x+" is random binary moisture value")
    res.send(x);
   };

   //ambient temperature and humidity

/**
 * A function that  
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.roomTemp = async (req, res) => {

  let x = Math.floor((Math.random() * 6)+17);
  console.log(x+"C is random room temperature value")
  res.send(x);
 };

 /**
 * A function that  
 * @param {*} req 
 * @param {*} res 
 */
  module.exports.roomHumidity = async (req, res) => {

    let x = Math.floor((Math.random() * 15)+40);
    console.log(x+"% is random room humidity value")
    res.send(x);
   };

/**
 * A function that  
 * @param {*} req 
 * @param {*} res 
 */
    module.exports.timeData = async (req, res) => {

      //it will get the timestamp value from mongodb like the rest above
     };

