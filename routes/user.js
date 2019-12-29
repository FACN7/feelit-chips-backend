const express = require("express");
const router = express.Router();

const { signUp, deleteUser, getAllusers } = require("../controllers/user");
const { isAuth, isAdmin } = require("../controllers/auth");

router.delete("/delete-user/:id", isAuth, isAdmin, deleteUser);
router.get("/get-all-users", isAuth, isAdmin, getAllusers);
router.post("/sign-up/:token", signUp);

module.exports = router;
