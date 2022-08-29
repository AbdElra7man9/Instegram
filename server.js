import express from 'express';
import mongoose from 'mongoose';
import jsonServer  from 'json-server';
import jwt  from 'jsonwebtoken';
import router from './Routes/UserRegister&Login.js';
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

const server = jsonServer.create();






app.use(express.json())
// app.use("/api/auth", router)

app.use('/', router);
