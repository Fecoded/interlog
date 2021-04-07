const pool = require("../config/db");

module.exports = {
    create: (data, cb) => {
        pool.query(
            `INSERT into transactions(UserId,Customer_Name,Product_Name,Reporting_Date,Field_Staff_Name,State,Opening_balance,Take_on,Release_,Loading,Release_balance,Closing_balance,Physical_Stock_Balance)
                    values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.UserId,
                data.Customer_Name,
                data.Product_Name,
                data.Reporting_Date,
                data.Field_Staff_Name,
                data.State,
                data.Opening_balance,
                data.Take_on,
                data.Release_,
                data.Loading,
                data.Release_balance,
                data.Closing_balance,
                data.Physical_Stock_Balance,
            ],
            (error, results, fields) => {
                if(error) {
                   return cb(error)
                }
                return cb(null, results)
            }
        )
    },
    getTransactions: cb => {
        pool.query(
            `SELECT * from transactions`,
            [], (error, results) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, results);
            }
        );
    },
    getTransactionById: (userId, cb) => {
        pool.query(
            `SELECT * from transactions where UserId = ?`,
            [userId],
            (error, result) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, result);
            }
        )
    },

    updateTransaction: (data, cb) => {
        console.log(data);
        pool.query(
            `UPDATE transactions SET UserId = ?, Customer_Name = ?,Product_Name = ?,Reporting_Date = ?,Field_Staff_Name = ?,State = ?,Opening_balance = ?,Take_on = ?,Release_ = ?,Loading = ?,Release_balance = ?,Closing_balance = ?,Physical_Stock_Balance = ?, Approval_1 = ?, Approval_2 = ?, Approval_3 = ?  WHERE id = ?`,
            [
                data.UserId,
                data.Customer_Name,
                data.Product_Name,
                data.Reporting_Date,
                data.Field_Staff_Name,
                data.State,
                data.Opening_balance,
                data.Take_on,
                data.Release_,
                data.Loading,
                data.Release_balance,
                data.Closing_balance,
                data.Physical_Stock_Balance,
                data.Approval_1,
                data.Approval_2,
                data.Approval_3,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    cb(error);
                }
                return cb(null, results);
            }
        )
    },

    searchByDate: (data, cb) => {
        pool.query(
            `SELECT * FROM transactions WHERE Reporting_Date BETWEEN ? AND ?`,
            [data.From, data.To],
            (error, results, fields) => {
                if(error) {
                    cb(error);
                }
                return  cb(null, results);
            }
        )
    },

    searchUserTransactionByDate: (data, cb) => {
        pool.query(
            `SELECT * FROM transactions WHERE UserId = ? AND Reporting_Date BETWEEN ? AND ?`,
            [data.UserId, data.From, data.To],
            (error, results, fields) => {
                if(error) {
                    cb(error);
                }
                return  cb(null, results);
            }
        )
    },

    searchTransaction: (data, cb) => {
        pool.query(
            `SELECT * FROM transactions WHERE Customer_Name = ? AND Product_Name = ?`,
            [data.Customer_Name, data.Product_Name],
            (error, results, fields) => {
                if(error) {
                    cb(error);
                }
                return  cb(null, results);
            }
        )
    },

    deleteTransaction: (data, cb) => {
        pool.query(
            `DELETE from transactions where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return cb(error);
                }
                return cb(results[0]);
            }
        )
    }
}