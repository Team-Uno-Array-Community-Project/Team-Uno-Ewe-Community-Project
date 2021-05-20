// const express = require('express');
const router = require('express').Router();
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const AdminModel = require('../model/admin-model');
const bcryptService = require('../services/bcrypt-service');
const jwtService = require('../services/jwt-service');


router.get("/admins", (req, res) => {

    AdminModel.find({}).then(document => {
     res.status(200).json(document);
    console.log(document);
  }).catch(err => {
    res.status(404).send(`Collection not found: ${err}`);
  });
});

router.patch('/refreshPassword', async (req, res) => {
    const hashedPassword = await bcryptService.hashPassword(process.env.ADMIN_PASS);

    AdminModel.findOneAndUpdate({}, {password: hashedPassword}) 
    .then( hash => { 
        res.status(200).send('password updated');

    })
})

router.post('/addAdmin', async (req, res) => {
    
    const newAdmin = new AdminModel({
    email: req.body.email,
    password: req.body.password    
    });

    await newAdmin.save()
        .then(document => {
            console.log(document)
            res.status(200).send('Successfully added the user!');
        })
        .catch(err => {
            console.error(err);
            res.status(401).send('Failed to create user');
        })
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let loggedAdmin = await AdminModel.find({ email });

        console.log(email, password, loggedAdmin[0]);

        if (await bcryptService.checkPassword(password, loggedAdmin[0].password)) {
            loggedAdmin = loggedAdmin[0].toJSON();
            delete loggedAdmin.password;

            const accessToken = jwtService.createToken(loggedAdmin);
            res.status(200).json({ accessToken, ...loggedAdmin })

            console.log( accessToken, + 'test')

        } else {
            res.status(401).send("not yarnie enough");
        }
    }catch(err) {
        console.log(err);
        res.status(401).send('incorrect email/password');
    }
});

module.exports = router;