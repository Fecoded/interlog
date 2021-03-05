const express = require("express");
const router = express.Router();
const { createUser, getUserById, getUsers, login, updateUser, deleteUser } = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser).patch(updateUser).delete(deleteUser);
router.route("/:id").get(getUserById);
router.route("/login").post(login);

module.exports = router;