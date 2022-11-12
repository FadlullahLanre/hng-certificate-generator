const express = require("express");
const router = express.Router();
const { inputCsv, csvToJSon } = require("../controllers/converter");

router.post("/postcsv", inputCsv);
router.get("/csvtojson", csvToJSon);

module.exports = router;
