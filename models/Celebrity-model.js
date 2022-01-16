//  Add your code here
const mongoose = require ("mongoose")
const {Schema, model} = require('mongoose');

//adding data 
const celebritySchema = new Schema({
name: String,
ocupation: String,
catchPhrase: String
})

//Models 

const Celebrity = mongoose.model('celebrities', celebritySchema)

module.exports= Celebrity; 