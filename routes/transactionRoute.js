const express = require("express");
const router = express.Router();
const { 
    createTransaction, 
    getTransactionById, 
    getTransactions, 
    updateTransaction,
    searchByDate, 
    searchUserTransactionByDate,
    searchTransaction,
    deleteTransaction
 } = require("../controllers/transactionController");
const { auth, authorize } = require("../middleware/auth")

router.route("/").get(auth, authorize("admin", "manager", "hr", "supervisor"), getTransactions)
                 .post(auth, authorize("staff"), createTransaction)
                 .patch(auth,  updateTransaction)
                 .delete(auth, deleteTransaction);
router.route("/search").post(auth, searchByDate);
router.route("/search-user-transaction").post(auth, searchUserTransactionByDate);
router.route("/search-transaction").post(auth, searchTransaction);
router.route("/:id").get(auth, authorize("staff"), getTransactionById);

module.exports = router;