const router = require ("express").Router();
const Movie = require("../models/movie-model")
const app = require("../app")
const { populate, find, findByIdAndUpdate } = require("../models/Movie.model");
const { Router } = require("express");
const Celebrity = require("../models/Celebrity-model");

                                  ///ROUTERS///

// CREATE NEW MOVIES - GET 
router.get("/movies/create",(req,res,next) => {
  Celebrity.find()
           .then(celebrities =>{ 
        res.render("movies/new-movies",{celebrities})
  })

// CREATE NEW MOVIES - POST
  router.post('/movies/create', (req, res) => {
    const { title, genre, plot, cast } = req.body
    Movie.findOne({ title })
         .then(movie => {
           if (movie) {
                res.render('movies/new-movie', { errorMessage: 'Already exist' })
                return
            }

    Movie.create({ title, genre, plot, cast})
         .then(() => res.redirect('/'))
         .catch(err => console.log(err))
        })
       .catch(err => console.log(err))
})


// MOVIE'S LIST - GET 
router.get('/movies', (req,res) =>{
  Movie.find().select('title')
       .then (movies => res.render('movies/movies',{movies}))
       .catch(err => console.log (err))
})

//MOVIE'S DETAILS - GET 
router.get('/movies/movie_id',(req,res,next) =>{
  const {movie_id} = req.params
Movie.findById(movie_id).populate('cast')
     .then(movie => res.render ('movies/movies-details',movie))
     .catch(err => console.log(err))
})

//MOVIE'S DELETE - POST

router.post('/movies/:id/delete', (req,res) => {
  const {id} = req.params
  Movie.findByIdAndRemove(id).populate('cast')
       .then(() => res.redirect('/movies'))
       .catch(err => console.log(err))
})


//MOVIE'S EDIT - GET
router.get('/movies/:id/edit',(req,res) => {
  const {id} = req.params
  Movie.findById(id)
  Celebrity.find()
  .populate('cast')
       .then(movie => res.render('movies/edit-movie', movie))
       .catch(err =>console.log(err))
})

//MOVIE'S EDIT - POST
router.post('routes/movies.routes', (req,res) =>{
  const {id} = req.params
  const {title,genre,plot,cast} = req.body
  Movie.findByIdAndUpdate(id,{title,genre,plot,cast})
      .then( () => res.redirect ('/movies'))
      .catch(err => console.log(err))
})

module.exports = router; 