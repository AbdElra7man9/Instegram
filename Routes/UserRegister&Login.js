import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import passport from 'passport';
import Users from '../models/Users.js';
const routeuser = express.Router();
routeuser.post('/signup', (req, res) => {
    const { email, password, fullname, username } = req.body;
    let errors = [];

    if (!email || !password || !fullname || !username) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    if (password.lenght < 6){
        return res.status(422).json({error:"Password must be at least 6 characters"})
    }
    Users.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new Users({
                        email,password: hashedpassword,fullname,username
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

routeuser.post('/signin', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/SignIn',
      failureFlash: true
      
    })(req, res, next);
    // return res.status(422).json({error:"invailed username or password"})
  
  });
  
  // Logout
  routeuser.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('SignIn');
  });
export default routeuser;