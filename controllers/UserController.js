import express from 'express';
import Users from '../models/Users.js';
import sendEmail from '../utile/sendEmail.js';
const routeuser = express.Router();
import crypto from 'crypto'
export const signup = async (req, res, next) => {
  const { username, email, password, fullname } = req.body;

  try {
    const emailCheck = await Users.findOne({ email });
    if (emailCheck)
      return res.status(400).json({ msg: "This email already exists." });
    const usernameCheck = await Users.findOne({ username });
    if (usernameCheck)
      return res.status(400).json({ msg: "Username already exists." });
    const user = await Users.create({
      email,
      username,
      fullname,
      password,
    });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ msg: "Please provide an email and password" });

  }
  try {
    const user = await Users.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ msg: "Invalid Email Or Password" });

    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid Email Or Password" });

    }
    sendToken(user, 200, res);
    console.log(user)
  } catch (error) {
    next(error);
  }
};

export const forgotpassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "The Email Adress you provided not found" });
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });
      return res.status(401).json({ msg: "An Email sent to the address you provided" });

    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return res.status(401).json({ msg: "Email could not be sent" });
    }
  } catch (err) {
    next(err);
  }
};


export const resetpassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await Users.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(401).json({ msg: "Invalid Reset Password Address" });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
}
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token, user });
};