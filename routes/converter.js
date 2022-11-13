const express = require ("express");
const router = express.Router();
const { pdf, csv } = require ("../controllers/converter.js");

router.get('/', csv);
router.post('/', pdf);

module.exports = router;