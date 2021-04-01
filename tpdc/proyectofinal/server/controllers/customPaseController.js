const express = require('express');
const { Custompase, Audiopase } = require('../models/customPase');


exports.createCustomPase = (req, res) => {

    req.body.custompase.user = req.profile;
    const custompase = new Custompase(req.body.custompase);
    custompase.save((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json(data);
    })

}


exports.showAllPases = (req, res) => {

    Custompase.find().exec((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json(data)
    })
}

exports.showPaseById = (req, res, next, id) => {

    Custompase.findById(id).exec((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        req.custompase = data;
        next()
    })
}

exports.showOnePase = (req, res) => {

    return res.json(req.custompase)
}