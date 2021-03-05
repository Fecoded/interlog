const express = require("express");
const router = express.Router();
const { createTransaction, getTransactionById, getTransactions, updateTransaction, deleteTransaction } = require("../controllers/transactionController");
const { auth, authorize } = require("../middleware/auth")

router.route("/").get(auth, getTransactions)
                 .post(auth, authorize("staff"), createTransaction)
                 .patch(auth, authorize("admin", "manager", "hr"), updateTransaction)
                 .delete(auth, deleteTransaction);
router.route("/:id").get(auth, getTransactionById);

module.exports = router;