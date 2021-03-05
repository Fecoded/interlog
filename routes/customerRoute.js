const express = require("express");
const router = express.Router();
const { createCustomer, getCustomerById, getCustomers, updateCustomer, deleteCustomer } = require("../controllers/customerController");
const { auth, authorize } = require("../middleware/auth")

router.route("/").get(auth, getCustomers)
                 .post(auth, authorize("admin", "manager", "hr"), createCustomer)
                 .patch(auth, authorize("admin", "manager", "hr"), updateCustomer)
                 .delete(auth, authorize("admin", "manager", "hr"), deleteCustomer);
router.route("/:id").get(auth, getCustomerById);

module.exports = router;