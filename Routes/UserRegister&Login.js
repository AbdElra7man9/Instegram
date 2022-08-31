import express from 'express';
import {signup,login,forgotpassword,resetpassword}  from '../controllers/UserController.js';
import {protect} from '../middleware/auth.js';
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgotpassword",forgotpassword);
router.put("/passwordreset/:resetToken",resetpassword);
// router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
// router.get("/logout/:id", logOut);

export default router