const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signUp = (req, res) => {

    User.findOne({ email: req.body.email }, (error, userDB) => {
        if (error) {
            return res.status(500).json({
                message: "Server Error"
            })
        }
        if (userDB) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,

        })
        user.save((error, user) => {

            if (error) {
                return res.status(400).json({
                    error
                })
            }
            res.json({ user })
        })


    })
}

exports.logIn = (req, res) => {
    User.findOne({ email: req.body.email }, (error, userDB) => {
        if (error) {
            return res.status(500).json({
                message: "Server Error"
            })
        }
        if (userDB == null) {
            return res.status(400).json({
                message: "User doesn't exist"
            })
        }

        if (!userDB.authenticate(req.body.password)) {
            return res.status(401).json({
                message: "User/Mail is wrong"
            })
        }
        const token = jwt.sign({
            _id: userDB._id
        },

            process.env.SEED,
            { expiresIn: process.env.TOKEN_EXPIRY }
        );

        return res.json({
            user: userDB,
            token: token
        });
    });

}


exports.showUser = (req, res) => {

    User.find().exec((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json(data)
    })
}


exports.showAllUsers = (req, res) => {

    User.find().populate("user").exec((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json(data)
    })
}

exports.showUserById = (req, res, next, id) => {

    User.findById(id).exec((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        req.user = data;
        next()
    })
}

exports.showOneUser = (req, res) => {
    return res.json(req.profile)
}