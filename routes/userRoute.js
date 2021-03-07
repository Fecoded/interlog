const express = require("express");
const router = express.Router();
const { createUser, getUserById, getUsers, login, updateUser, deleteUser } = require("../controllers/userController");
const { auth } = require("../middleware/auth")

router.route("/").get(getUsers).post(createUser).patch(updateUser).delete(deleteUser);
router.route("/:id").get(auth, getUserById);
router.route("/login").post(login);

module.exports = router;