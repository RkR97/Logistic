const express = require('express');
const router = express.Router();
const LogisticReg = require('../models/logistic_reg.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('', (req, res) => {
    var { userName, email, fullName, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { throw err }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) { throw err }
            password = hash;
            var newUser = new LogisticReg({ userName, email, fullName, password });
            newUser.save((err, doc) => {
                if (err) { console.log("Error in data storage"); }
                else {
                    let payload = { subject: doc._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.json({ message: "Registration Succesfull", status: 200, token });
                }
            });
        })
    })
});

module.exports = router;