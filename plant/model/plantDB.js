const mongoose = require('mongoose');
const Schema = mongoose.Schema


//schema consisting of all the columns storing all the sensor data being sent to the database

const plantSchema = new Schema({

    moisture: {
        type: Number,
        required: false
    },
    
    roomTemp: {
        type: Number,
        required: false
    },

    roomHumidity: {
        type: Number,
        required: false

    },
}, {timestamps: true }); 

const sensorData = mongoose.model('sensorData', plantSchema)

//Our plant module exported to be accessed elsewhere
module.exports = sensorData;