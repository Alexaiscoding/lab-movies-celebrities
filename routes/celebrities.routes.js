const router = require("express").Router();

router.get("/celebrities/create", async (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (e) {
    next(e);
  }
});

router.post("/celebrities/create", async (req, res, next) => {
  try {
    res.redirect("/celebrities");
  } catch (e) {
    res.render("celebrities/new-celebrity");
    next(e);
  }
});

module.exports = router;
