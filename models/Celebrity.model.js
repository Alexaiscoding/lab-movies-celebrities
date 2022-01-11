const mongoose = require ("mongoose")
const { Schema, model} = require('mongoose');


const { Schema } = require("mongoose");

//  Add your code here

//adding data 
const celebritySchema = new Schema({

name: String,
ocupation: String,
catchPhrase: String

})

//Models 

const Celebrity = model("celebrities", celebritySchema)

module.exports= Celebrity; 