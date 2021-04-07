const pool = require("../config/db");

module.exports = {
    create: (data, cb) => {
        pool.query(
            `INSERT into users(fullname, state, email, password, role)
                    values(?,?,?,?,?)`,
            [
                data.fullname,
                data.state,
                data.email,
                data.password,
                data.role
            ],
            (error, results, fields) => {
                if(error) {
                   return cb(error)
                }
                return cb(null, results)
            }
        )
    },
    getUsers: cb => {
        pool.query(
            `SELECT * from users`,
            [], (error, results) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, results);
            }
        );
    },
    getUserById: (id, cb) => {
        pool.query(
            `SELECT id,fullname,state,email,role from users where id = ?`,
            [id],
            (error, result) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, result[0]);
            }
        )
    },
    getUserByEmail: (email, cb) => {
        pool.query(
            `SELECT * FROM users where email = ?`,
            [email],
            (error, results, fields) => {
                if(error) {
                    return cb(error);
                }
                return cb(null, results[0]);
            }
        )
    },

    updateUser: (data, cb) => {
        pool.query(
            `UPDATE users SET fullname = ?, state = ?, email = ?, password = ?, role = ? WHERE id = ?`,
            [
                data.fullname,
                data.state,
                data.email,
                data.password,
                data.role,
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
    deleteUser: (data, cb) => {
        console.log(data);
        pool.query(
            `DELETE from users where id = ?`,
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