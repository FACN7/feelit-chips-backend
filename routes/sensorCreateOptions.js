const express = require("express");
const router = express.Router();

const { createOption, getOptions } = require("../controllers/sensorCreateOptions");

router.post("/create-input-options", createOption);
router.get("/print-inputs-options", getOptions);

module.exports = router;
