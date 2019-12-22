const express = require("express");
const router = express.Router();

const { createOptionCollection, getOptions, editOption } = require("../controllers/sensorCreateOptions");
const { isAuth, isAdmin } = require("../controllers/auth");

router.post("/create-input-options", isAuth, isAdmin, createOptionCollection);
router.post("/edit-dropdown", isAuth, isAdmin, editOption);

router.get("/print-inputs-options", getOptions);

module.exports = router;
