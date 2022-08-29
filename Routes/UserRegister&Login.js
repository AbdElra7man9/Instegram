import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import passport from 'passport';
import Users from '../models/Users.js';
// import {ensureAuthenticated,forwardAuthenticated,admin} from '../config/Auth.js'
const routeuser = express.Router();

routeuser.post('/signup', (req, res) => {
  const { email, password, fullname, username } = req.body;
  let errors = [];

  if (!email || !password || !fullname || !username) {
    return res.status(422).json({ error: "please add all the fields" })
  }
  if (password.lenght < 6) {
    return res.status(422).json({ error: "Password must be at least 6 characters" })
  }
  Users.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exists with that email" })
      }
      bcrypt.hash(password, 12)
        .then(hashedpassword => {
          const user = new Users({
            email, password: hashedpassword, fullname, username
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
routeuser.post('/api/auth',async (req, res) => {
  try {
    const user =await Users.findOne({ email: req.body.email });
    !user && res.status(404).json("invalid password or email");
    const validpassword =await bcrypt.compare(req.body.password, user.password);
    !validpassword && res.status(404).json('invalid password');
  } catch (err) {
    console.log(err);
  }
})


// routeuser.post("/api/auth", (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) throw err;
//       if (!user) {

//         res.send("invalid password or username");
//       }
//       else {
//         req.logIn(user, (err) => {
//           if (err) throw err;
//           res.send("Successfully Authenticated");

//           console.log(req.user);
//         });
//       }
//     })(req, res, next);
//   });


//   // Logout
//   routeuser.get('/logout', (req, res) => {
//     req.logout();
//     // req.flash('success_msg', 'You are logged out');
//     res.redirect('SignIn');
//   });
export default routeuser;