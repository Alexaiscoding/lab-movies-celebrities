const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

router.get("./celebrities.routes.js",(req,res,next) =>{
  res.render("./celebrities.routes.js");
});

router.get("./celebrities.routes.js",(req,res,next) =>{
  res.render("./movies.routes.js");
});