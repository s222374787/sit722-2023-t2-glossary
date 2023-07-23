var express = require("express");
var router = express.Router();

const vocabList = [
  {
    id: 1,
    term: "Waterfall",
    description: "what is the waterfall method?",
    references: "tbd",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "DevOps Glossary", terms: vocabList });
});

module.exports = router;
