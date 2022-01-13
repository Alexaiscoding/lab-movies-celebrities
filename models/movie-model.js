const {Schema, model} = require("mongoose");

const movieSchema = new Schema ( 
{ 
title: String,
genre: String,
plot: String,
cast: [{
    type: Schema.Celebrity,
    ref: "Celebrity"
}]}

)


module.exports = model('Movie', movieSchema);