var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
   res.send("API is working properly, new version");
});

module.exports = router;