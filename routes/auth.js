const express = require("express");
const router = express.Router();
const { isAuth, logIn, authCheck, signOut } = require("../controllers/auth");
const { userLogInValidator } = require("../validators/index");

router.get("/auth-check", isAuth, authCheck);
router.post("/login", userLogInValidator, logIn);
router.get("/signout", signOut);

module.exports = router;
