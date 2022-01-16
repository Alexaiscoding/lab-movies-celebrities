const mongoose = require ("mongoose")
const {Schema, model} = require('mongoose');

const movieSchema = new Schema ({ 
title: String,
genre: String,
plot: String,
cast: [{
    type: Schema.Celebrity,
    ref: "Celebrity"
}]

})

const Movie =  mongoose.model('Movie', movieSchema)


module.exports = Movie;