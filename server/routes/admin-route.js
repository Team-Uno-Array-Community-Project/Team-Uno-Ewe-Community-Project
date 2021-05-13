const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Admin = require('../model/admin');


router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'welcome to my domain',
                authData
            });
        }
    });
});


router.post('/login', (req, res) => {
    //admin
    const admin = {
        id: 1,
        username: 'Penny',
        password: '12345'
    }
    jwt.sign({ admin }, 'secretkey', { expiresIn: '3h'}, (err, token) => {
        res.json({
            token
        })
    });
});

//verify token
function verifyToken(req, res, next) {
    // get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
        //split at the space
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //next middleware
        next();

    } else {
        res.sendStatus(403);
    }

}


module.exports = router;