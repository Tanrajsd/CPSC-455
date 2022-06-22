var express = require("express");
var router = express.Router();

const password = "open sesame";

router.post("/", function (req, res, next) {
  if (req.body.password === password) {
    res.send({ message: "Login successful", valid: true });
    return;
  } else {
    res.send({ message: "Incorrect password", valid: false });
    return;
  }
});

module.exports = router;
