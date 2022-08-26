import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import Users from '../models/Users.js';
const routeuser = express.Router();
routeuser.post('/signup', (req, res) => {
    const { email, password, fullname, username } = req.body;
    // let errors = [];

    if (!email || !password || !fullname || !username) {
        return res.status(422).json({ error: "please add all the fields" })

    }
    Users.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        fullname,
                        username
                    })

                    user.save()
                        .then(user => {
                            res.json({ message: "saved successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
        .catch(err => {
            console.log(err)
        })
})

export default routeuser;