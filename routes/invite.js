const express = require("express");
const router = express.Router();

const { inviteUser } = require("../controllers/invite");
const { isAuth, isAdmin } = require("../controllers/auth");
const { userInviteValidator } = require("../validators/index");

router.post("/invite-user", isAuth, isAdmin, userInviteValidator, inviteUser);

module.exports = router;
