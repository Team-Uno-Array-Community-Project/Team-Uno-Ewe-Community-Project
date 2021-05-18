const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const AdminModel = require('../model/admin');
const bcryptService = require('../services/bcrypt-service');
const jwtService = require('../services/jwt-service');


// router.post('/', verifyToken, (req, res) => {
//     jwt.verify(req.token, "secretkey", (err, authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 message: 'welcome to my domain',
//                 authData
//             });
//         }
//     });
// });
router.get("/admins", (req, res) => {
    
    AdminModel.find({}).then(document => {
        console.log(document);
    })
})
router.patch('/refreshPassword', async (req, res) => {
    const hashedPassword = await bcryptService.hashPassword(process.env.ADMIN_PASS);

    AdminModel.findOneAndUpdate({}, {password: hashedPassword}) 
    .then( hash => { 
        res.status(200).send('password updated');

    })
})

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






    // const admins = admins.find(admins => {return admins.email === email && admins.password === password });

    // if (admins) {
    //     const accessToken = jwt.sign({ admins: admins.email, password: admins.password}, process.env.TOKEN_KEY);

    //     res.json({
    //         accessToken
    //     });
    // }else {
    //     res.send( "Username or password is incorrect")
    // }



    // jwt.sign({ admin }, 'secretkey', { expiresIn: '3h'}, (err, token) => {
    //     res.json({
    //         token
    //     })
    // });
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