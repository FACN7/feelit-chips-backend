const express = require("express");
const router = express.Router();

const { create, getChipsList } = require("../controllers/chip");

router.post("/print-resistance-table", create);
router.get("/get-chips-list", getChipsList);

module.exports = router;
