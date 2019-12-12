const express = require("express");
const router = express.Router();

const { createChip, getChipsList } = require("../controllers/chip");

router.post("/print-resistance-table", createChip);
router.get("/get-chips-list", getChipsList);

module.exports = router;
