import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import localStrategy from "./config/passport.js";
// import passport from 'passport';
import routeuser from './Routes/UserRegister&Login.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
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
app.use(helmet());
app.use(morgan("common"));
app.use(cors({
  origin: "http://localhost:3000", //react location
  credentials: true
}))
app.use(express.json())
// localStrategy(passport);
// app.use(session({
//   name: 'sessionId',
//   secret: "mysecretkeythatiwillnottellyou",
//   saveUninitialized: false, // don't create sessions for not logged in users
//   resave: false, //don't save session if unmodified
//   cookie: { maxAge: 1000 * 60 * 60 * 24 }
// }));
// app.get('/', (res, req) => {
//   console.log(req.session)
// }
// )
// app.use(cookieParser('mysecretkeythatiwillnottellyou'));

// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

app.use('/', routeuser);
