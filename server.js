import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import localStrategy  from "./config/passport.js";
import passport from 'passport';
import routeuser from './Routes/UserRegister&Login.js';

import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Run Successfully at  http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json())
localStrategy(passport);
app.use(cookieParser('NotSoSecret'));
app.use(session({
    name: 'sessionId',
    secret: "mysecretkeythatiwillnottellyou",
    saveUninitialized: false, // don't create sessions for not logged in users
    resave: false, //don't save session if unmodified
    cookie:{maxAge :1000 * 60 * 60 * 24}
}));


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use('/',routeuser);
