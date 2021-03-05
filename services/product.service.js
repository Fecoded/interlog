const pool = require("../config/db");

module.exports = {
    create: (data, cb) => {
        pool.query(
            `INSERT into products(Product_Name,Customer_Name)
                    values(?,?)`,
            [
                data.Product_Name,
                data.Customer_Name
            ],
            (error, results, fields) => {
                if(error) {
                   return cb(error)
                }
                return cb(null, results)
            }
        )
    },
    getProducts: cb => {
        pool.query(
            `SELECT id,Product_Name,Customer_Name from products`,
            [], (error, results) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, results);
            }
        );
    },
    getProductById: (id, cb) => {
        pool.query(
            `SELECT id,Product_Name,Customer_Name from products where id = ?`,
            [id],
            (error, result) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, result[0]);
            }
        )
    },

    updateProduct: (data, cb) => {
        pool.query(
            `UPDATE products SET Product_Name = ?, Customer_Name = ?  WHERE id = ?`,
            [
                data.Customer_Name,
                data.Product_Name,
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
    deleteProduct: (data, cb) => {
        pool.query(
            `DELETE from products where id = ?`,
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