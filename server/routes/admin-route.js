const router = require('express').Router();

//imports from required files
const AdminModel = require('../model/admin-model');
const bcryptService = require('../services/bcrypt-service');
const jwtService = require('../services/jwt-service');

//getting all admins in the database
router.get("/admins", (req, res) => {

    AdminModel.find({}).then(document => {
        res.status(200).json(document);
    }).catch(err => {
        res.status(404).send(`Collection not found: ${err}`);
    });
});

//reseting the password to hash unhashed passwords usinmg the bcrypt service
router.patch('/refreshPassword', async (req, res) => {
    const hashedPassword = await bcryptService.hashPassword(process.env.ADMIN_PASS);
    //finding the admin data and updating the password with bcrypt hash security
    AdminModel.findOneAndUpdate({}, { password: hashedPassword })
        .then(hash => {
            res.status(200).send('password updated');

        })
})
//adding admin to the database 
router.post('/addAdmin', async (req, res) => {

    const newAdmin = new AdminModel({
        email: req.body.email,
        password: req.body.password
    });

    await newAdmin.save()
        .then(document => {
            res.status(200).send('Successfully added the user!');
        })
        .catch(err => {
            console.error(err);
            res.status(401).send('Failed to create user');
        })
});

//login route for the login page
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let loggedAdmin = await AdminModel.find({ email });
        //set to "if" the passwords match up it will delete the password before it is returned
        //checking the passwords using the bcrypt service
        if (await bcryptService.checkPassword(password, loggedAdmin[0].password)) {
            loggedAdmin = loggedAdmin[0].toJSON();
            delete loggedAdmin.password;
            //it will then create an accessToken or "jwt" verifying the login using the jwt service
            const accessToken = jwtService.createToken(loggedAdmin);
            res.status(200).json({ accessToken, ...loggedAdmin })

        } else {
            res.status(401).send("not yarnie enough");
        }
    } catch (err) {
        res.status(401).send('incorrect email/password');
    }
});

module.exports = router;