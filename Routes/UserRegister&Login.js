import express from 'express';
import {signup,login,forgetpassword,resetpassword}  from '../controllers/UserController.js'
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgetpassword",forgetpassword);
router.put("/resetpassword:/resttoken",resetpassword);
// router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
// router.get("/logout/:id", logOut);

export default router