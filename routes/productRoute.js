const express = require("express");
const router = express.Router();
const { createProduct, getProductById, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");
const { auth, authorize } = require("../middleware/auth")

router.route("/").get(auth, getProducts)
                 .post(auth, authorize("admin", "staff"), createProduct)
                 .patch(auth, authorize("admin", "staff"), updateProduct)
                 .delete(auth, authorize("admin", "staff"), deleteProduct);
router.route("/:id").get(auth, getProductById);

module.exports = router;