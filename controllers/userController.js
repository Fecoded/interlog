const { create, getUserById, getUsers, getUserByEmail, updateUser, deleteUser } = require("../services/user.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.createUser = async (req, res) => {
    const body = req.body;

    const salt = await bcrypt.genSalt(10);

    body.password = await bcrypt.hash(body.password, salt);

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
            data: results,
            msg: "User was created successfully"
        })
    })
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    getUserByEmail(email, async (err, results) => {
        if(err) {
            console.log(err);
        }
        if(!results){
            return res.status(400).json({ success: false, message: "Invalid email or password"});
        }

        const result = await bcrypt.compare(password, results.password);

        if(result){
            const payload = { user: { id: results.id, role: results.role } };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  return res.status(200).json({
                    success: true,
                    token,
                    message: "Login Successfully"
                  });
                }
              );
        } else {
            return res.status(400).json({ success: false, message: "Invalid email or password"});
        }
    })
}

exports.getUsers = async (req, res) => {
    getUsers((err, results) => {
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

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
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

exports.updateUser = async(req, res) => {
    const body = req.body;
    const salt = await bcrypt.genSalt(10);

    body.password = await bcrypt.hash(body.password, salt);
    
    updateUser(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.status(400).json({
                success: false,
                message: "Failed to update user"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Updated Successfull"
        })
    })
}

exports.deleteUser = async(req, res) => {
    const data = req.query;
    deleteUser(data, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results) {
            return res.status(200).json({
                success: true,
                message: "User deleted successfully"
            })
        }
          
    })
}