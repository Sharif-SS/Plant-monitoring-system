//connect to mongodb atlas
const uri = "mongodb+srv://MUN:1234@planecrash111.lvgp1.mongodb.net/plantDataDB?retryWrites=true&w=majority";
const mongoose = require('mongoose')

//connect mongoose to database
async function connectToDB() {
    try {
        await 
         mongoose.connect(uri, 
          {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
          console.log("Connected successfully to mongoDB");
        
    } catch (err) {
        throw err;
    } 
}

async function connectionStatus() {
    var conState = String(mongoose.connection.readyState);
    return conState
        /*
        ready states:
        0: disconnected
        1: connected
        2: connecting
        3: disconnecting
        */
}


module.exports = {connectToDB,connectionStatus}