const { create, getProductById, getProducts, updateProduct, deleteProduct} = require("../services/product.service");


exports.createProduct = async (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                msg: "Database connection error"
            });
        }
        return res.status(201).json({
            success: true,
            msg: "Product was created successfully"
        });
    });
}

exports.getProducts = async (req, res) => {
    getProducts((err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        return res.status(200).json({
            success: true,
            data: results
        })
    })
}

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    getProductById(id, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({ success: false, message: "Record not found"});
        }
        return res.status(200).json({ success: true, data: results });
    })
}

exports.updateProduct = async(req, res) => {
    const body = req.body;

    updateProduct(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({
                success: false,
                message: "Failed to update product"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Updated Successfully"
        })
    })
}

exports.deleteProduct = async(req, res) => {
    const data = req.body;
    deleteProduct(data, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results) {
            return res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            })
        }
          
    })
}
