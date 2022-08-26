import express from 'express';
import mongoose from 'mongoose';
import routeuser from './Routes/Auth.js';

import Users from './models/Users.js';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 5000;



// app.use('/api/signup',routeuser);

// app.use(require('./Routes/Auth'));
app.use(express.json())
app.use('/',routeuser);




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
