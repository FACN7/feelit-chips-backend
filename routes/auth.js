const express = require("express");
const router = express.Router();
const { isAuth } = require("../controllers/auth");

router.get("/auth-check", isAuth);

module.exports = router;
