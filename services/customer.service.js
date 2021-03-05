const pool = require("../config/db");

module.exports = {
    create: (data, cb) => {
        pool.query(
            `INSERT into customer(Customer_Name)
                    values(?)`,
            [
                data.Customer_Name,
            ],
            (error, results, fields) => {
                if(error) {
                   return cb(error)
                }
                return cb(null, results)
            }
        )
    },
    getCustomers: cb => {
        pool.query(
            `SELECT id,Customer_Name from customer`,
            [], (error, results) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, results);
            }
        );
    },
    getCustomerById: (id, cb) => {
        pool.query(
            `SELECT id,Customer_Name from customer where id = ?`,
            [id],
            (error, result) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, result[0]);
            }
        )
    },

    updateCustomer: (data, cb) => {
        pool.query(
            `UPDATE customer SET Customer_Name = ?  WHERE id = ?`,
            [
                data.Customer_Name,
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
    deleteCustomer: (data, cb) => {
        pool.query(
            `DELETE from customer where id = ?`,
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