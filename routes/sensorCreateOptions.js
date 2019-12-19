const express = require("express");
const router = express.Router();

const { createOptionCollection, getOptions, editOption } = require("../controllers/sensorCreateOptions");

// add admin middleware
router.post("/create-input-options", createOptionCollection);
router.post("/edit-dropdown", editOption);
//

router.get("/print-inputs-options", getOptions);

module.exports = router;
