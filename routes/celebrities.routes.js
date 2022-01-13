
const router = require("express").Router();
const Celebrity = require("../models/celebrity.model");


//routers

router.get("/celebrities/create", async (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (e) {
    next(e);
  }
});



router.post("/celebrities/create", (req, res, next) => {
  const{name,occupation, catchPhrase} =req.body;
  Celebrity.create({ name,occupation,catchPhrase})
  .then(celebrity => {
    res.redirect ("celebrities");
  })
  .catch (err => {
    res.render("celebrities/new-celebrity",{
      celebirty:req.body,
      errorMessages:"Error during the process of creation a new celebrity"
    });
  });



  router.get("/celebrities",(req,res,next) => {
    Celebrity.find()

    .then(celebrity => {
      res.render("celebrities/celebrities"),{celebrities};
    })
    .catch (err =>{ 
      console.log('Error',err);
      next(e);
    });
      
  });

  router.get("/movies/create",(req,res,next) => {
    res.render("movies/new-movies")
  })

module.exports = router;
