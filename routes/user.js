const express = require("express");
const router = express.Router();

const { signUp, deleteUser, getAllusers } = require("../controllers/user");
const { isAuth, isAdmin } = require("../controllers/auth");
const { userSignupValidator } = require("../validators/index");

router.delete("/delete-user/:id", isAuth, isAdmin, deleteUser);
router.get("/get-all-users", isAuth, isAdmin, getAllusers);
router.post("/sign-up/:token", userSignupValidator, signUp);

module.exports = router;
