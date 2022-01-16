const router = require("express").Router();
const Celebrity = require("../models/Celebrity-model");
const app = require("../app");

//ROUTERS

//Create a new celebrity: GET
router.get("/celebrities/create", async (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (err) {
    next(err);
  }
});

//Create a new celebrity: POST

router.post("/celebrities/create", (req, res, next) => {
  const{name,occupation, catchPhrase} = req.body;
  Celebrity.create({ name,occupation,catchPhrase})
  .then(celebrity => {
    res.redirect ("celebrities")
  })
  .catch (err => {
    res.render("celebrities/new-celebrity",{
      celebirty = req.body,
      errorMessages:"Error during the process of creation a new celebrity"
    });
  });
});


// Celebrities List's GET 
  router.get("/celebrities",(req,res,next) => {
    Celebrity.find()
    .then(celebrity=> {
      res.render("celebrities/celebrities"),{celebrities};
    })
    .catch ((err) =>{ 
      console.log('Error',err);
      next(e);
    });
      
  });


module.exports = router;
