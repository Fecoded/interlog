const { 
    create, 
    getTransactionById, 
    getTransactions, 
    updateTransaction, 
    searchByDate, 
    searchUserTransactionByDate, 
    searchTransaction,
    deleteTransaction
} = require("../services/transaction.service");


exports.createTransaction = async (req, res) => {
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
            msg: "Transaction was created successfully"
        });
    });
}

exports.getTransactions = async (req, res) => {
    getTransactions((err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        return res.status(200).json({
            success: true,
            data: results.sort((x, y) => y.id - x.id)
        })
    })
}

exports.getTransactionById = async (req, res) => {
    const id = req.params.id;
    getTransactionById(id, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({ success: false, msg: "Record not found"});
        }
        return res.status(200).json({ success: true, data: results });
    })
}

exports.updateTransaction = async(req, res) => {
    const body = req.body;
    updateTransaction(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({
                success: false,
                msg: "Failed to update transaction"
            });
        }
        return res.status(200).json({
            success: true,
            msg: "Updated Successfully"
        })
    })
}

exports.searchByDate = async(req, res) => {
    const body = req.body;
    searchByDate(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        return res.status(200).json({
            success: true,
            count: results.length,
            data: results.sort((x, y) => y.id - x.id)
        })
    })
}

exports.searchUserTransactionByDate = async(req, res) => {
    const body = req.body;
    searchUserTransactionByDate(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        return res.status(200).json({
            success: true,
            count: results.length,
            data: results.sort((x, y) => y.id - x.id)
        })
    })
}

exports.searchTransaction = async(req, res) => {
    const body = req.body;
    searchTransaction(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        return res.status(200).json({
            success: true,
            data: results[results.length - 1]
        })
    })
}

exports.deleteTransaction = async(req, res) => {
    const data = req.query;
    deleteTransaction(data, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results) {
            return res.status(200).json({
                success: true,
                msg: "Transaction deleted successfully"
            })
        }
          
    })
}
