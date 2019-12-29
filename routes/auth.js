const express = require("express");
const router = express.Router();
const { isAuth, logIn, authCheck, signOut } = require("../controllers/auth");

router.get("/auth-check", isAuth, authCheck);
router.post("/login", logIn);
router.get("/signout", signOut);

module.exports = router;
