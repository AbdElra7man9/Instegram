import express from 'express';
import bcrypt from 'bcrypt';
import Users from '../models/Users.js';
const routeuser = express.Router();

export const signup = async (req, res, next) => {
    try {
        const { username, email, password, fullname } = req.body;
        const usernameCheck = await Users.findOne({ username });
        if (usernameCheck)
            return res.json({ msg: "Username already used", status: false });
        const emailCheck = await Users.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await Users.create({
            email,
            username,
            fullname,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user)
            return res.json({ msg: "Incorrect email or Password", status: false });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.json({ msg: "Incorrect email or Password", status: false });
        delete user.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
export const forgetpassword = (req, res, next) => {
    
}

export const resetpassword = (req, res, next) => {
    
}

