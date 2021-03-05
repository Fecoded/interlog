const pool = require("../config/db");

module.exports = {
    create: (data, cb) => {
        pool.query(
            `INSERT into transactions(Customer_Name,Product_Name,Reporting_Date,Field_Staff_Name,Opening_balance,Take_on,Release_,Loading,Release_balance,Closing_balance,Physical_Stock_Balance)
                    values(?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.Customer_Name,
                data.Product_Name,
                data.Reporting_Date,
                data.Field_Staff_Name,
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
    getTransactionById: (id, cb) => {
        pool.query(
            `SELECT * from transactions where id = ?`,
            [id],
            (error, result) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, result[0]);
            }
        )
    },

    updateTransaction: (data, cb) => {
        pool.query(
            `UPDATE transactions SET Customer_Name = ?,Product_Name = ?,Reporting_Date = ?,Field_Staff_Name = ?,Opening_balance = ?,Take_on = ?,Release_ = ?,Loading = ?,Release_balance = ?,Closing_balance = ?,Physical_Stock_Balance = ?  WHERE id = ?`,
            [
                data.Customer_Name,
                data.Product_Name,
                data.Reporting_Date,
                data.Field_Staff_Name,
                data.Opening_balance,
                data.Take_on,
                data.Release_,
                data.Loading,
                data.Release_balance,
                data.Closing_balance,
                data.Physical_Stock_Balance,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    cb(error);
                }
                return cb(null, results)
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