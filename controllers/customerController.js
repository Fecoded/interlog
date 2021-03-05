const { create, getCustomerById, getCustomers, updateCustomer, deleteCustomer} = require("../services/customer.service");


exports.createCustomer = async (req, res) => {
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
            msg: "Customer was created successfully"
        });
    });
}

exports.getCustomers = async (req, res) => {
    getCustomers((err, results) => {
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

exports.getCustomerById = async (req, res) => {
    const id = req.params.id;
    getCustomerById(id, (err, results) => {
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

exports.updateCustomer = async(req, res) => {
    const body = req.body;

    updateCustomer(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({
                success: false,
                message: "Failed to update customer"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Updated Successfully"
        })
    })
}

exports.deleteCustomer = async(req, res) => {
    const data = req.body;
    deleteCustomer(data, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results) {
            return res.status(200).json({
                success: true,
                message: "Customer deleted successfully"
            })
        }
          
    })
}
