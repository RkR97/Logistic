const express = require('express');
const router = express.Router();
const LogisticLogin = require('../models/logistic_reg.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('', (req, res) => {
    var { userName, password } = req.body;
    LogisticLogin.findOne({ userName }, (err, docs) => {
        if (err) { throw err; }
        else if (!docs) {
            res.json({ message: "No such user exist", status: 401 });
        }
        bcrypt.compare(password, docs.password, (err, ans) => {
            if (err) { throw err }
            else if (ans) {
                var token = jwt.sign({ userName: docs.userName }, 'secret')
                res.json({ message: "Login Succesfull", status: 200, user: docs, token });
            } else {
                res.json({ message: "password not match", status: 401 })
            }
        })
    })
})

module.exports = router;