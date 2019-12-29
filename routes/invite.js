const express = require("express");
const router = express.Router();

const { inviteUser } = require("../controllers/invite");
const { isAuth, isAdmin } = require("../controllers/auth");

router.post("/invite-user", isAuth, isAdmin, inviteUser);

module.exports = router;
