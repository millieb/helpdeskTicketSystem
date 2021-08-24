const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');

const {sign} = require('jsonwebtoken');

const { Users } = require('../models');
router.use(cors())

router.post("/", async (req, res) => {
    const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
    }

    bcrypt.hash(req.body.password, 10).then((hash) => {
        userData.password = hash
        Users.create(userData)
        res.json("Success");
    });
});

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await Users.findOne({ where: {email: email} });

    if (!user) res.json ({error: "User does not exist."});
    
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({error: "Wrong username and password combintation."});

        const accessToken = sign(
            { email: user.email, id: user.id},
            /* low security in string for demo purposes only */
            "importantsecret"
        );
        res.json(accessToken);
    });
});


module.exports = router;